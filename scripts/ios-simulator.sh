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
xcodebuild -workspace ios/App/App.xcworkspace -scheme App -configuration Debug \
  -sdk iphonesimulator -destination 'generic/platform=iOS Simulator' \
  -derivedDataPath ios/DerivedData CODE_SIGNING_ALLOWED=NO build
app="$PWD/ios/DerivedData/Build/Products/Debug-iphonesimulator/App.app"
test -d "$app"
# Bound each simulator operation; a stuck service must not hold CI indefinitely.
simctl() {
  python3 - "$@" <<'PY'
import subprocess,sys
try:
    result=subprocess.run(['xcrun','simctl',*sys.argv[1:]],timeout=240)
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
simctl bootstatus "$device" -b
simctl install "$device" "$app"
simctl launch "$device" co.huskysoft.mascotas
sleep 5
simctl io "$device" screenshot ios/App/output/iphone-launch.png
ditto -c -k --sequesterRsrc --keepParent "$app" ios/App/output/Huskyvet-simulator.zip
echo 'App para simulador y captura en ios/App/output. No es un IPA instalable en un iPhone físico.'
