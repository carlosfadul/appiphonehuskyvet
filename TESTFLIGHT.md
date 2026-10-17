# Huskyvet: activación y TestFlight

Identificador existente: `co.huskysoft.mascotas`. Nombre: Huskyvet. Idioma principal: español. SKU propuesto: `huskyvet-ios`. No cambiar el identificador entre el proyecto, el perfil y App Store Connect.

## Preparado

- Xcode 26.3 seleccionado explícitamente en macOS 15.
- Compilación e instalación en un simulador con iOS 26.
- Archivo Release para iPhone físico, sin firma, como comprobación de compilación.
- Flujo manual `Huskyvet TestFlight`, solo para main; no se ejecuta al hacer push.
- Credenciales exigidas al inicio, perfil validado contra el equipo y la aplicación, llavero temporal y limpieza al finalizar.

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
