#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
test "$(uname -s)" = Darwin
major=$(xcodebuild -version | head -1 | awk '{print $2}' | cut -d. -f1)
test "$major" -ge 26
mkdir -p ios/App/output
xcodebuild -workspace ios/App/App.xcworkspace -scheme App -configuration Release \
  -destination 'generic/platform=iOS' -archivePath ios/Release/Huskyvet.xcarchive \
  CODE_SIGNING_ALLOWED=NO archive
test -f ios/Release/Huskyvet.xcarchive/Products/Applications/App.app/Info.plist
xcodebuild -version > ios/App/output/release-verification.txt
xcrun --sdk iphoneos --show-sdk-version >> ios/App/output/release-verification.txt
echo 'Release archive compiled without signing. Not an installable IPA.' >> ios/App/output/release-verification.txt
