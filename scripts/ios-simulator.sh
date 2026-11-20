#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
if [[ "$(uname -s)" != Darwin ]]; then
  echo 'El simulador oficial requiere macOS y Xcode. En Windows ejecuta npm run ios:prepare.' >&2
  exit 1
fi
command -v xcodebuild >/dev/null
command -v pod >/dev/null
if [[ "${HUSKYVET_USE_PREBUILT:-0}" != 1 ]]; then npm run ios:prepare; fi
test -f dist/gestion/index.html
npx cap sync ios
mkdir -p ios/App/output
# Bound each simulator operation; a stuck service must not hold CI indefinitely.
simctl() {
  python3 - "$@" <<'PY'
import os,subprocess,sys
try:
    result=subprocess.run(['xcrun','simctl',*sys.argv[1:]],timeout=int(os.environ.get('HUSKYVET_SIM_TIMEOUT','240')))
    sys.exit(result.returncode)
except subprocess.TimeoutExpired:
    print('Simulator command timed out: '+sys.argv[1],file=sys.stderr)
    sys.exit(124)
PY
}
echo 'Selecting an available iOS 26 simulator'
device="$(simctl list devices available --json | node -e 'let s="";process.stdin.on("data",d=>s+=d);process.stdin.on("end",()=>{const d=Object.entries(JSON.parse(s).devices).filter(([r])=>/iOS-26-/.test(r)).flatMap(([,ds])=>ds).find(d=>d.isAvailable&&d.name.startsWith("iPhone"));if(!d)process.exit(1);process.stdout.write(d.udid)})')"
state="$(simctl list devices --json | node -e 'let s="";process.stdin.on("data",d=>s+=d);process.stdin.on("end",()=>process.stdout.write(Object.values(JSON.parse(s).devices).flat().find(d=>d.udid===process.argv[1]).state))' "$device")"
if [[ "$state" != Booted ]]; then simctl boot "$device"; fi
# A cold simulator starts while Xcode builds, instead of waiting until afterwards.
xcodebuild -workspace ios/App/App.xcworkspace -scheme App -configuration Debug \
  -sdk iphonesimulator -destination 'generic/platform=iOS Simulator' \
  -derivedDataPath ios/DerivedData CODE_SIGNING_ALLOWED=NO build
app="$PWD/ios/DerivedData/Build/Products/Debug-iphonesimulator/App.app"
test -d "$app"
if ! HUSKYVET_SIM_TIMEOUT=420 simctl bootstatus "$device" -b; then
  echo 'Retrying the same ephemeral simulator after a bounded cold-start timeout'
  simctl shutdown "$device" || true
  simctl boot "$device"
  HUSKYVET_SIM_TIMEOUT=240 simctl bootstatus "$device" -b
fi
simctl install "$device" "$app"
recognizer="${RUNNER_TEMP:-${TMPDIR:-/tmp}}/huskyvet-verify-ios-launch"
xcrun swiftc scripts/verify-ios-launch.swift -o "$recognizer"
"$recognizer" --self-test
simctl launch "$device" co.huskysoft.mascotas
python3 scripts/verify-ios-launch.py "$device" "$recognizer" ios/App/output
ditto -c -k --sequesterRsrc --keepParent "$app" ios/App/output/Huskyvet-simulator.zip
echo 'Pantalla de acceso verificada visualmente. App, captura y logs en ios/App/output. No es un IPA instalable en un iPhone físico.'
