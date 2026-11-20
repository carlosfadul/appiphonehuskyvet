// CI-only visual assertion; this file is not compiled into the application.
import Foundation
import Vision

func isAccessScreen(_ lines: [String]) -> Bool {
    let text = lines.joined(separator: " ").folding(options: [.diacriticInsensitive, .caseInsensitive], locale: Locale(identifier: "es_CO"))
    return text.contains("bienvenido") && text.contains("huskyvet")
        && text.contains("equipo de veterinaria") && text.contains("dueno de mascota")
}

if CommandLine.arguments.dropFirst().first == "--self-test" {
    let visible = ["Bienvenido a Huskyvet", "Equipo de veterinaria o estética", "Dueño de mascota"]
    guard isAccessScreen(visible), !isAccessScreen([]), !isAccessScreen(["9:41", "Huskyvet"]),
          !isAccessScreen(Array(visible.dropLast())) else { exit(2) }
    print("Visual assertion rejects blank, logo-only and incomplete access screens.")
    exit(0)
}

guard CommandLine.arguments.count == 2 else {
    fputs("Usage: verify-ios-launch <screenshot.png>\n", stderr)
    exit(2)
}
do {
    let request = VNRecognizeTextRequest()
    request.recognitionLevel = .accurate
    request.recognitionLanguages = ["es-ES", "en-US"]
    request.usesLanguageCorrection = false
    let handler = VNImageRequestHandler(url: URL(fileURLWithPath: CommandLine.arguments[1]), options: [:])
    try handler.perform([request])
    let lines = (request.results ?? []).compactMap { $0.topCandidates(1).first?.string }
    let rendered = isAccessScreen(lines)
    let result: [String: Any] = ["rendered": rendered, "recognizedLines": lines]
    let data = try JSONSerialization.data(withJSONObject: result, options: [.prettyPrinted, .sortedKeys])
    print(String(decoding: data, as: UTF8.self))
    exit(rendered ? 0 : 1)
} catch {
    fputs("Screenshot recognition failed: \(error)\n", stderr)
    exit(2)
}
