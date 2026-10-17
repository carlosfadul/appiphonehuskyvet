import UIKit
import Capacitor

/// Uses the iOS print sheet (AirPrint / system PDF preview) for the same receipt as Android.
@objc(ReceiptPrinterPlugin)
public class ReceiptPrinterPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "ReceiptPrinterPlugin"
    public let jsName = "ReceiptPrinter"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "print", returnType: CAPPluginReturnPromise)
    ]
    private var printing = false

    @objc func print(_ call: CAPPluginCall) {
        guard let html = call.getString("html"), !html.isEmpty, html.utf8.count <= 5_000_000 else {
            call.reject("El recibo no es válido o es demasiado grande.")
            return
        }
        DispatchQueue.main.async {
            guard !self.printing else {
                call.reject("Cierra la impresión anterior antes de continuar.")
                return
            }
            guard let view = self.bridge?.viewController?.view, view.window != nil,
                  UIPrintInteractionController.isPrintingAvailable else {
                call.reject("La impresión no está disponible en este dispositivo.")
                return
            }
            self.printing = true
            let controller = UIPrintInteractionController.shared
            let info = UIPrintInfo(dictionary: nil)
            info.jobName = "Recibo Huskyvet"
            info.outputType = .general
            controller.printInfo = info
            controller.printFormatter = UIMarkupTextPrintFormatter(markupText: html)
            let completion: UIPrintInteractionController.CompletionHandler = { _, completed, error in
                self.printing = false
                controller.printFormatter = nil
                if let error = error {
                    call.reject("No fue posible imprimir el recibo.", nil, error)
                } else {
                    call.resolve(["completed": completed])
                }
            }
            let presented: Bool
            if UIDevice.current.userInterfaceIdiom == .pad {
                presented = controller.present(from: CGRect(x: view.bounds.midX, y: view.bounds.midY, width: 1, height: 1), in: view, animated: true, completionHandler: completion)
            } else {
                presented = controller.present(animated: true, completionHandler: completion)
            }
            if !presented {
                self.printing = false
                controller.printFormatter = nil
                call.reject("No fue posible abrir la impresión del recibo.")
            }
        }
    }
}
