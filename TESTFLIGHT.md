# Huskyvet: activación y TestFlight

Identificador existente: `co.huskysoft.mascotas`. Nombre: Huskyvet. Idioma principal: español. SKU propuesto: `huskyvet-ios`. No cambiar el identificador entre el proyecto, el perfil y App Store Connect.

## Estado al 20 de octubre de 2026

Estado final comprobado: Apple aceptó y procesó Huskyvet 1.19 (21), build ID `e5a5d1c8-dd40-4c68-865f-1b76fad8ff08`, `processingState=VALID`. La habilitación beta permanece en `MISSING_EXPORT_COMPLIANCE`. La clave con rol Developer permite subir y consultar, pero devolvió HTTP 403 al intentar modificar `buildBetaDetails` y `builds.usesNonExemptEncryption`. No se modificó la declaración ni se amplió el rol. El titular debe completarla desde TestFlight. El grupo interno está creado, sin compilación asociada todavía y sin invitados; no se enviaron invitaciones. La revisión técnica encontró uso de HTTPS del sistema y no encontró cifrado propio; esa es la base para revisar el cuestionario de Apple. No se afirma instalación o prueba en iPhone físico.

Actualización de publicación: la compilación firmada 1.19 (21) se subió correctamente el 20 de octubre de 2026 a las 18:45 de Colombia. Ejecución: https://github.com/carlosfadul/appiphonehuskyvet/actions/runs/39516511954 , intento 2. Xcode confirmó `ARCHIVE SUCCEEDED`, `Upload succeeded` y `EXPORT SUCCEEDED`. El primer intento falló por incompatibilidad del P12 con el llavero de macOS; se reexportó en formato compatible, se verificó y se actualizó el secreto. El P12 usado es `.private-signing/Huskyvet-Distribution-macos.p12`, con la contraseña de `p12-password.txt`.

Los siete secretos están en el entorno GitHub `testflight`, limitado a main y protegido con revisión del titular. No se publicaron secretos en el repositorio. Se creó el grupo interno `Huskyvet - pruebas internas` (ID `894e667a-ed43-43fb-9bfc-a5de324dc009`), sin invitados. El procesamiento y la habilitación final para pruebas se registrarán cuando Apple devuelva la compilación.

La captura aportada por el titular confirma Apple Developer Program como persona física y renovación el 19 de octubre de 2027. El Team ID se guardó en `huskyvet-mobile/.env.testflight.local`, excluido de Git. Ese archivo es una preparación local: no configura automáticamente los secretos de GitHub ni acredita una firma.

La versión 1.19 compiló correctamente en https://github.com/carlosfadul/appiphonehuskyvet/actions/runs/39153571366 . Sigue pendiente comprobar o registrar el App ID en el portal, crear la ficha de App Store Connect y configurar certificado, perfil y clave de subida. No hay subida confirmada a TestFlight. El control del navegador no está disponible; se continúa con pasos guiados mientras se recupera.

## Preparado

- Perfil `Huskyvet TestFlight` recibido y validado el 20 de octubre de 2026. UUID `96e163c8-bc54-4d96-833a-c92ba29e07d4`; equipo y app correctos, certificado coincidente, distribución App Store sin dispositivos y sin permiso de depuración. Guardado en `.private-signing/Huskyvet-TestFlight.mobileprovision`. Pendiente únicamente respecto a los materiales de firma/subida: clave App Store Connect con Key ID e Issuer ID. También falta transferir los materiales al entorno privado de GitHub y ejecutar/verificar la subida. Nunca subir la carpeta de firma al repositorio público.

- Certificado recibido el 20 de octubre de 2026: Apple Distribution para el equipo `9S2VGHX7L8`; coincide con la clave privada del CSR y vence el 20 de octubre de 2027. P12 exportado y comprobado: `huskyvet-mobile/.private-signing/Huskyvet-Distribution.p12`. Para `APPLE_CERTIFICATE_PASSWORD` usar el contenido de `p12-password.txt`, no `distribution-password.txt` (que protege la clave PEM). Ambos permanecen locales y excluidos de Git. Pendientes: perfil App Store Connect, credencial de subida y configuración privada de GitHub.

- Ficha de App Store Connect confirmada por captura: Apple ID `6825113107`, nombre Huskyvet. App ID registrado: `co.huskysoft.mascotas`.
- Solicitud de certificado de distribución generada y verificada el 20 de octubre de 2026: `huskyvet-mobile/.private-signing/Huskyvet-Distribution.certSigningRequest`. La carpeta está excluida de Git; contiene también la clave privada cifrada y su contraseña local. Subir a Apple únicamente el archivo `.certSigningRequest`. Falta descargar el certificado emitido, cotejar su clave pública y preparar el P12.

- Xcode 26.3 seleccionado explícitamente en macOS 15.
- Compilación e instalación en un simulador con iOS 26.
- Archivo Release para iPhone físico, sin firma, como comprobación de compilación.
- Flujo manual `Huskyvet TestFlight`, solo para main; no se ejecuta al hacer push.
- Credenciales exigidas al inicio, perfil validado contra el equipo y la aplicación, llavero temporal y limpieza al finalizar.

## Verificación realizada

El 17 de octubre de 2026 se aprobaron el archivo Release sin firma y la instalación y apertura en simulador iPhone 17 Pro con iOS 26, usando Xcode 26.3 y SDK 26.2. Se revisó la captura de bienvenida. Evidencia: https://github.com/carlosfadul/appiphonehuskyvet/actions/runs/39057101996 . Esto no acredita todavía la firma ni la subida.

## Pendiente cuando Apple active la membresía

1. Confirmar acceso a Certificates, Identifiers & Profiles y App Store Connect.
2. Registrar un App ID explícito `co.huskysoft.mascotas`, si está disponible para este equipo. Crear la ficha iOS de Huskyvet en App Store Connect.
3. Crear certificado Apple Distribution con su clave privada y exportarlo a P12 protegido con contraseña. Crear perfil de distribución App Store para este App ID y certificado.
4. Crear una clave de App Store Connect autorizada para subir compilaciones. Guardar el archivo P8 de forma privada, nunca en Git. La creación y almacenamiento de estas credenciales se harán después de la autorización correspondiente.
5. Crear el entorno GitHub `testflight`, restringido a main, con aprobación del propietario antes de ejecutar. Añadir los secretos indicados abajo.
6. Ejecutar Actions → Huskyvet TestFlight → Run workflow con un número entero de compilación nuevo y mayor que el último enviado. El flujo firma y sube; Apple aún debe procesarlo.
7. Resolver la declaración de cifrado según el comportamiento real de la aplicación. No se ha marcado automáticamente una exención ni respondido en nombre del titular.
8. Crear un grupo interno en TestFlight y añadir al titular con acceso a la app. Seleccionar la compilación procesada e instalarla desde TestFlight en un iPhone disponible. Los probadores externos requieren el proceso de revisión beta de Apple.

## Secretos del entorno testflight

| Nombre | Contenido |
| --- | --- |
| APPLE_TEAM_ID | Identificador del equipo Apple de 10 caracteres |
| APPLE_CERTIFICATE_BASE64 | Archivo P12 codificado en base64 |
| APPLE_CERTIFICATE_PASSWORD | Contraseña del archivo P12 |
| APPLE_PROFILE_BASE64 | Perfil App Store mobileprovision codificado en base64 |
| APPLE_API_KEY_ID | Key ID de App Store Connect |
| APPLE_API_ISSUER_ID | Issuer ID del equipo |
| APPLE_API_PRIVATE_KEY | Contenido completo del archivo P8 |

No guardar datos personales, claves, contraseñas ni cuentas de prueba en este repositorio público. No subir el archivo firmado o los registros de firma como artefactos públicos.

## Ensayo antes de operar

Usar cuentas y datos de prueba. Verificar acceso y salida de cada rol, aislamiento entre negocios, veterinaria y estética independientes, reservas de familia y confirmación del negocio, venta/recibo/AirPrint y cancelación de impresión, carga de archivos, permisos de notificación concedidos y rechazados, recordatorios, teclado y áreas seguras. Confirmar CORS para `capacitor://localhost` en el servidor.

La compilación sin firma no valida certificados ni la aceptación de Apple. No hay todavía IPA firmado, carga a TestFlight ni pruebas completas por rol en un teléfono físico.
