"""Check the unauthenticated simulator screen, without changing product code."""
import json
import pathlib
import subprocess
import sys
import time


def verify(device, recognizer, output, timeout=90):
    output = pathlib.Path(output)
    output.mkdir(parents=True, exist_ok=True)
    started = time.monotonic()
    deadline = started + timeout
    attempts = []
    rendered = False
    fatal = None
    try:
        while time.monotonic() < deadline:
            attempt = {"seconds": round(time.monotonic() - started, 2)}
            try:
                capture = subprocess.run(
                    ["xcrun", "simctl", "io", device, "screenshot", str(output / "iphone-launch.png")],
                    capture_output=True, text=True, timeout=max(1, min(20, deadline - time.monotonic())))
                attempt["captureExit"] = capture.returncode
                if capture.returncode != 0:
                    attempt["captureError"] = capture.stderr[-2000:]
                elif time.monotonic() < deadline:
                    result = subprocess.run(
                        [recognizer, str(output / "iphone-launch.png")],
                        capture_output=True, text=True, timeout=max(1, min(20, deadline - time.monotonic())))
                    attempt["recognitionExit"] = result.returncode
                    if result.returncode in (0, 1):
                        observation = json.loads(result.stdout)
                        attempt.update(observation)
                        rendered = result.returncode == 0 and observation.get("rendered") is True
                    else:
                        fatal = result.stderr[-2000:] or "Vision recognizer failed"
                        attempt["recognitionError"] = fatal
            except subprocess.TimeoutExpired as error:
                attempt["timeout"] = str(error.cmd[0])
            attempts.append(attempt)
            print(json.dumps(attempt, ensure_ascii=False), flush=True)
            if rendered or fatal:
                break
            time.sleep(max(0, min(5, deadline - time.monotonic())))
    finally:
        # Fresh simulator: only unauthenticated startup was exercised. Preserve
        # native/WebKit errors so a blank screen cannot be reported as success.
        try:
            logs = subprocess.run(
                ["xcrun", "simctl", "spawn", device, "log", "show", "--last", "3m", "--style", "compact",
                 "--predicate", 'process == "App" OR process == "com.apple.WebKit.WebContent"'],
                capture_output=True, text=True, timeout=30)
            (output / "iphone-startup.log").write_text(logs.stdout + logs.stderr, encoding="utf-8")
        except subprocess.TimeoutExpired:
            (output / "iphone-startup.log").write_text("Startup log collection exceeded 30 seconds.\n", encoding="utf-8")
        report = {"rendered": rendered, "waitLimitSeconds": timeout,
                  "attempts": attempts, "fatal": fatal}
        (output / "iphone-launch-verification.json").write_text(
            json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    return 0 if rendered else 1


if __name__ == "__main__":
    if sys.platform != "darwin" or len(sys.argv) != 4:
        sys.exit("Run on macOS: verify-ios-launch.py <device> <recognizer> <output-directory>")
    sys.exit(verify(*sys.argv[1:]))
