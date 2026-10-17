# Huskyvet iPhone — paquete para Mac en la nube

Este paquete contiene el proyecto Xcode y el contenido ya compilado de familias y gestión. No es un instalador IPA.

Este repositorio contiene Huskyvet, desarrollado por Huskysoft. El propietario autorizó alojarlo públicamente en carlosfadul/appiphonesimmexico; el nombre del repositorio no cambia la identidad de la aplicación.

La compilación se ejecuta al actualizar main. También puedes ejecutar Actions → Huskyvet iPhone prebuilt → Run workflow.

El flujo instala las dependencias, compila sin firma para el simulador de iPhone, arranca la aplicación y guarda un ZIP de App.app y una captura. No publica en App Store ni TestFlight. La captura de arranque no certifica todos los recorridos ni la impresión.

En un Mac propio, con Node 22, Xcode y CocoaPods instalados: npm ci, luego HUSKYVET_USE_PREBUILT=1 npm run ios:simulator.

No ejecutes ios:prepare desde este paquete reducido: el repositorio de desarrollo completo contiene el código Angular que necesita ese comando.

Para iPhone físico/TestFlight se necesita configurar la cuenta y el equipo Apple, certificado y perfil de distribución. Usa co.huskysoft.mascotas como identificador salvo que Apple indique que no está disponible. No se incluyen credenciales, datos de clientes ni certificados.

API: https://huskyvet.huskysoft.com.co/api/duenos. El backend debe admitir Origin capacitor://localhost. Usa cuentas de prueba para los ensayos. Los enlaces universales necesitan el Team ID y publicar la asociación del dominio; pegar el enlace de clínica ya está disponible.
