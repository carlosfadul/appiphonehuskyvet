#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
test "$(uname -s)" = Darwin
for name in BUILD_NUMBER APPLE_TEAM_ID APPLE_CERTIFICATE_BASE64 APPLE_CERTIFICATE_PASSWORD APPLE_PROFILE_BASE64 APPLE_API_KEY_ID APPLE_API_ISSUER_ID APPLE_API_PRIVATE_KEY; do
  if [[ -z "${!name:-}" ]]; then echo "Missing required configuration: $name" >&2; exit 1; fi
done
[[ "$BUILD_NUMBER" =~ ^[1-9][0-9]{0,8}$ ]] || { echo 'Invalid build number'; exit 1; }
[[ "$APPLE_TEAM_ID" =~ ^[A-Z0-9]{10}$ ]] || { echo 'Invalid Team ID'; exit 1; }
major=$(xcodebuild -version | head -1 | awk '{print $2}' | cut -d. -f1)
test "$major" -ge 26
umask 077
private_dir=$(mktemp -d "${RUNNER_TEMP:?}/huskyvet-signing.XXXXXX")
keychain="$private_dir/signing.keychain-db"
cleanup() {
  security delete-keychain "$keychain" >/dev/null 2>&1 || true
  if [[ -n "${profile_path:-}" ]]; then rm -f "$profile_path"; fi
  rm -rf "$private_dir"
}
trap cleanup EXIT
printf '%s' "$APPLE_CERTIFICATE_BASE64" | base64 --decode > "$private_dir/certificate.p12"
printf '%s' "$APPLE_PROFILE_BASE64" | base64 --decode > "$private_dir/profile.mobileprovision"
printf '%s' "$APPLE_API_PRIVATE_KEY" > "$private_dir/AuthKey.p8"
security cms -D -i "$private_dir/profile.mobileprovision" > "$private_dir/profile.plist"
export SIGNING_PROFILE_PLIST="$private_dir/profile.plist"
python3 - <<'PY'
import os, plistlib, datetime
with open(os.environ['SIGNING_PROFILE_PLIST'], 'rb') as f: p=plistlib.load(f)
team=os.environ['APPLE_TEAM_ID']
assert team in p['TeamIdentifier'], 'Wrong provisioning team'
assert p['Entitlements']['application-identifier']==team+'.co.huskysoft.mascotas', 'Wrong app identifier'
assert p['ExpirationDate']>datetime.datetime.now(datetime.timezone.utc).replace(tzinfo=None), 'Expired profile'
assert not p.get('ProvisionedDevices') and not p.get('ProvisionsAllDevices'), 'App Store profile required'
assert not p['Entitlements'].get('get-task-allow',False), 'Distribution profile required'
PY
uuid=$(/usr/libexec/PlistBuddy -c 'Print UUID' "$private_dir/profile.plist")
[[ "$uuid" =~ ^[A-Fa-f0-9-]+$ ]] || exit 1
mkdir -p "$HOME/Library/MobileDevice/Provisioning Profiles"
profile_path="$HOME/Library/MobileDevice/Provisioning Profiles/$uuid.mobileprovision"
cp "$private_dir/profile.mobileprovision" "$profile_path"
keychain_password=$(openssl rand -hex 32)
security create-keychain -p "$keychain_password" "$keychain"
security set-keychain-settings -lut 21600 "$keychain"
security unlock-keychain -p "$keychain_password" "$keychain"
security import "$private_dir/certificate.p12" -P "$APPLE_CERTIFICATE_PASSWORD" -k "$keychain" -T /usr/bin/codesign -T /usr/bin/security >/dev/null
security set-key-partition-list -S apple-tool:,apple:,codesign: -s -k "$keychain_password" "$keychain" >/dev/null
security list-keychains -d user -s "$keychain" "$HOME/Library/Keychains/login.keychain-db"
export PROFILE_UUID="$uuid"
# Apply the distribution profile only to the app, never to CocoaPods frameworks.
ruby - <<'RUBY'
require 'xcodeproj'
project = Xcodeproj::Project.open('ios/App/App.xcodeproj')
target = project.targets.find { |t| t.name == 'App' }
abort 'App target missing' unless target
target.build_configurations.each do |config|
  config.build_settings['DEVELOPMENT_TEAM'] = ENV.fetch('APPLE_TEAM_ID')
  config.build_settings['CODE_SIGN_STYLE'] = 'Manual'
  config.build_settings['CODE_SIGN_IDENTITY'] = 'Apple Distribution'
  config.build_settings['PROVISIONING_PROFILE_SPECIFIER'] = ENV.fetch('PROFILE_UUID')
  config.build_settings['CURRENT_PROJECT_VERSION'] = ENV.fetch('BUILD_NUMBER')
end
project.save
RUBY
xcodebuild -workspace ios/App/App.xcworkspace -scheme App -configuration Release \
  -destination 'generic/platform=iOS' -archivePath ios/Release/Huskyvet.xcarchive \
  archive
export EXPORT_OPTIONS_PATH="$private_dir/ExportOptions.plist" PROFILE_UUID="$uuid"
python3 - <<'PY'
import os,plistlib
options={'method':'app-store-connect','destination':'upload','teamID':os.environ['APPLE_TEAM_ID'],
 'signingStyle':'manual','signingCertificate':'Apple Distribution','manageAppVersionAndBuildNumber':False,
 'uploadSymbols':True,'provisioningProfiles':{'co.huskysoft.mascotas':os.environ['PROFILE_UUID']}}
with open(os.environ['EXPORT_OPTIONS_PATH'],'wb') as f: plistlib.dump(options,f)
PY
xcodebuild -exportArchive -archivePath ios/Release/Huskyvet.xcarchive \
  -exportOptionsPlist "$EXPORT_OPTIONS_PATH" -exportPath ios/Release/export \
  -authenticationKeyPath "$private_dir/AuthKey.p8" -authenticationKeyID "$APPLE_API_KEY_ID" \
  -authenticationKeyIssuerID "$APPLE_API_ISSUER_ID"
echo 'Upload submitted. Confirm processing and tester assignment in App Store Connect.'
