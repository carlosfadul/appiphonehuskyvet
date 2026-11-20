package co.huskysoft.mascotas;

import android.content.Context;
import android.os.Bundle;
import android.os.CancellationSignal;
import android.os.ParcelFileDescriptor;
import android.print.*;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import com.getcapacitor.*;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "ReceiptPrinter")
public class ReceiptPrinterPlugin extends Plugin {
    private WebView document;
    @PluginMethod public void print(PluginCall call) {
        String html = call.getString("html");
        if (html == null || html.length() > 5000000) {
            call.reject("El recibo no es válido o es demasiado grande.");
            return;
        }
        getActivity().runOnUiThread(() -> {
            if (document != null) { call.reject("Cierra la impresión anterior antes de continuar."); return; }
            WebView page = new WebView(getActivity());
            document = page;
            page.getSettings().setJavaScriptEnabled(false);
            page.getSettings().setAllowFileAccess(false);
            page.getSettings().setAllowContentAccess(false);
            page.getSettings().setBlockNetworkLoads(true);
            page.setWebViewClient(new WebViewClient() {
                private boolean started;
                @Override public void onPageFinished(WebView view, String url) {
                    if (started) return;
                    started = true;
                    try {
                        PrintManager manager = (PrintManager) getActivity().getSystemService(Context.PRINT_SERVICE);
                        if (manager == null) throw new IllegalStateException("Impresión no disponible");
                        PrintDocumentAdapter adapter = view.createPrintDocumentAdapter("Recibo Huskyvet");
                        manager.print("Recibo Huskyvet", new PrintDocumentAdapter() {
                            @Override public void onStart() { adapter.onStart(); }
                            @Override public void onLayout(PrintAttributes oldAttrs, PrintAttributes newAttrs, CancellationSignal signal, LayoutResultCallback callback, Bundle extras) { adapter.onLayout(oldAttrs, newAttrs, signal, callback, extras); }
                            @Override public void onWrite(PageRange[] pages, ParcelFileDescriptor destination, CancellationSignal signal, WriteResultCallback callback) { adapter.onWrite(pages, destination, signal, callback); }
                            @Override public void onFinish() { adapter.onFinish(); page.destroy(); if (document == page) document = null; }
                        }, new PrintAttributes.Builder().build());
                        call.resolve();
                    } catch (Exception error) {
                        page.destroy(); document = null;
                        call.reject("No fue posible abrir la impresión del recibo.", error);
                    }
                }
            });
            page.loadDataWithBaseURL("https://localhost/", html, "text/html", "UTF-8", null);
        });
    }
    @Override protected void handleOnDestroy() {
        getActivity().runOnUiThread(() -> { if (document != null) { document.destroy(); document = null; } });
    }
}
