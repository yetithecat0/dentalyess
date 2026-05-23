# Bitácora de Desarrollo — Dental Yess Web

Este archivo registra el progreso, ajustes, errores encontrados y lecciones aprendidas durante el desarrollo del proyecto de la landing page oficial de **Dental Yess Centro Odontológico**.

---

## Registro de Cambios

### [2026-05-23] - Inicialización y Estructura Base del Proyecto
- **Avances:**
  - Confirmación de las reglas del proyecto especificadas en `AGENTS (1).md`.
  - Incorporación de reglas especiales de comunicación (saludo "hola" para despliegue local y reporte de últimos ajustes).
  - Creación del archivo `vitacora.md` para el seguimiento del proyecto.
  - Inicialización del proyecto Next.js 14 con App Router y Javascript.
  - Configuración personalizada de Tailwind CSS (`tailwind.config.js`) con la paleta de colores de Dental Yess y fuentes de Google Fonts (Poppins e Inter).
  - Configuración de `app/layout.js` (metadata, fuentes optimizadas) y `app/globals.css` (scroll suave y scrollbar estilizado).
  - Creación de archivos auxiliares de datos y constantes: `lib/constants.js` y `lib/data.js`.
  - Desarrollo de los primeros componentes base: `Navbar` (con menú mobile animado con Framer Motion) y `Footer` (estructura responsive de enlaces y datos de contacto).
  - Puesta en marcha del servidor de desarrollo local.
- **Errores y Soluciones:**
  - *Error en pnpm install / pnpm add:* Error `ERR_PNPM_IGNORED_BUILDS` por el script postinstall del paquete `unrs-resolver` bajo pnpm v11.
    - *Solución:* Se ejecutó `pnpm approve-builds unrs-resolver` para permitir la compilación del script y continuar con la instalación de dependencias exitosamente.
- **Lecciones Aprendidas:**
  - En versiones modernas de `pnpm` (v10 y v11+), las políticas de seguridad por defecto impiden ejecutar scripts de instalación (`postinstall`) sin consentimiento explícito. Es necesario usar `pnpm approve-builds <nombre-paquete>` para autorizar dependencias de plantillas como las de Next.js.

---
*Última actualización: 2026-05-23*
