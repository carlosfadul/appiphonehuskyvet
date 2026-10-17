import Capacitor

class HuskyvetViewController: CAPBridgeViewController {
    override func capacitorDidLoad() {
        bridge?.registerPluginInstance(ReceiptPrinterPlugin())
    }
}
