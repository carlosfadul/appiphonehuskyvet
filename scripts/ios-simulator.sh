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
# Pick an installed, available iPhone instead of assuming a model or runtime version.
device="$(xcrun simctl list devices available --json | node -e 'let s="";process.stdin.on("data",d=>s+=d);process.stdin.on("end",()=>{const d=Object.values(JSON.parse(s).devices).flat().find(d=>d.isAvailable&&d.name.startsWith("iPhone"));if(!d)process.exit(1);process.stdout.write(d.udid)})')"
state="$(xcrun simctl list devices --json | node -e 'let s="";process.stdin.on("data",d=>s+=d);process.stdin.on("end",()=>process.stdout.write(Object.values(JSON.parse(s).devices).flat().find(d=>d.udid===process.argv[1]).state))' "$device")"
if [[ "$state" != Booted ]]; then xcrun simctl boot "$device"; fi
xcrun simctl bootstatus "$device" -b
xcrun simctl install "$device" "$app"
xcrun simctl launch "$device" co.huskysoft.mascotas
sleep 5
xcrun simctl io "$device" screenshot ios/App/output/iphone-launch.png
ditto -c -k --sequesterRsrc --keepParent "$app" ios/App/output/Huskyvet-simulator.zip
echo 'App para simulador y captura en ios/App/output. No es un IPA instalable en un iPhone físico.'
