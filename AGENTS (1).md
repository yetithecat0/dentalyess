# AGENTS.md — Dental Yess Web
> Documento de reglas y contexto para agentes de desarrollo (Claude Code, Cursor, Copilot, etc.)
> Proyecto: Landing page oficial de Dental Yess Centro Odontológico — Ica, Perú

---

## 1. Identidad del proyecto

| Campo | Valor |
|---|---|
| Nombre del proyecto | dental-yess-web |
| Cliente | Dental Yess — Centro Odontológico |
| Propietaria | Dra. Yessenia Calsin Silva |
| Ciudad | Ica, Perú |
| Tipo | Landing page institucional |
| Objetivo | Reforzar confianza de marca, presentar servicios y facilitar agendamiento de citas |

---

## 2. Stack tecnológico

| Capa | Tecnología |
|---|---|
| Framework | Next.js 14 (App Router) |
| Lenguaje | JavaScript (sin TypeScript) |
| Estilos | Tailwind CSS |
| Animaciones | Framer Motion |
| Gestor de paquetes | pnpm |
| Deploy | Vercel |
| Email (contacto) | Resend |
| Formularios | React Hook Form |

### Reglas de stack
- Usar **App Router** exclusivamente. No usar `pages/` directory.
- Todos los componentes son **Client Components** (`"use client"`) salvo que sean exclusivamente de presentación estática, en cuyo caso pueden ser Server Components.
- No instalar librerías sin justificación explícita.
- No usar `axios`; usar `fetch` nativo.
- No usar `moment.js`; usar `date-fns` si se necesita manipulación de fechas.

---

## 3. Estructura de carpetas

```
dental-yess-web/
├── app/
│   ├── layout.js           # Layout raíz: fuentes, metadata global
│   ├── page.js             # Landing page principal (composición de secciones)
│   ├── globals.css         # Variables CSS, reset, utilidades globales
│   └── api/
│       └── contact/
│           └── route.js    # API Route para envío de email con Resend
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── sections/
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Services.jsx
│       ├── ProgramaInfantil.jsx
│       ├── ProgramaMayores.jsx
│       ├── CampanasSalud.jsx
│       ├── PorQueElegirnos.jsx
│       ├── Galeria.jsx
│       ├── Testimonios.jsx
│       └── Contacto.jsx
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── doctora.jpg
│   │   ├── consultorio/
│   │   ├── antes-despues/
│   │   └── campanas/
│   └── favicon.ico
├── .diseño/
│   └── dental_yess.html    # Mockup visual de referencia estética (NO modificar)
├── .env.local              # Variables de entorno (nunca commitear)
├── .env.example            # Plantilla de variables de entorno
├── AGENTS.md               # Este archivo
├── next.config.js
├── tailwind.config.js
└── package.json
```

### Reglas de estructura
- Cada sección de la landing es un componente independiente en `components/sections/`.
- `app/page.js` solo importa y compone secciones; no contiene lógica ni JSX inline extenso.
- Los recursos visuales van en `public/images/` organizados por carpeta temática.
- La carpeta `.diseño/` es de solo lectura; contiene el mockup de referencia.

---

## 4. Identidad visual

### Paleta de colores

```css
--color-morado:       #6B3FA0;   /* Color ancla de marca */
--color-morado-light: #8B5CC8;
--color-lavanda:      #E8DEFF;   /* Fondos suaves, badges */
--color-verde-salvia: #7BAE7F;   /* Acento natural */
--color-verde-menta:  #4CAF85;   /* CTA, WhatsApp, botones de acción */
--color-verde-oscuro: #0F6E56;   /* Texto sobre verde */
--color-amarillo:     #F0A500;   /* Programa infantil */
--color-crema:        #F9F7F4;   /* Fondo neutro cálido */
--color-blanco:       #FFFFFF;
--color-gris-oscuro:  #2D2D3A;   /* Textos, footer */
--color-gris-medio:   #6B6B7B;   /* Subtextos */
```

### Tipografía

| Rol | Fuente | Peso |
|---|---|---|
| Headings | Poppins | 600, 700 |
| Body | Inter | 400, 500 |
| Taglines / frases | Poppins | 300 italic |

Importar desde Google Fonts en `app/layout.js` usando `next/font/google`.

### Componentes de identidad visual
- **Logo**: isotipo circular con diente en `--color-morado` + tipografía "DENTAL YESS" bold + "CENTRO ODONTOLÓGICO" light tracking amplio.
- **Bordes redondeados**: `rounded-2xl` (12px) como estándar. `rounded-full` solo para avatares y badges.
- **Sombras**: sutiles, `shadow-sm` o `shadow-md`. Nunca sombras dramáticas.
- **Blobs decorativos**: formas orgánicas circulares con opacidad 0.10–0.15 para fondos del Hero.

### Referencia estética obligatoria
> El agente debe consultar `.diseño/dental_yess.html` como referencia visual primaria antes de implementar cualquier sección. El resultado del código debe ser fiel en paleta, tipografía, espaciado, agrupación de secciones y jerarquía visual.

---

## 5. Secciones de la landing

El orden de renderizado en `app/page.js` es:

1. `<Navbar />` — sticky, fondo blanco, logo + links + CTA
2. `<Hero />` — gradiente morado→verde, tagline, 2 CTAs, placeholder doctora
3. `<About />` — foto doctora + presentación + badges de valores
4. `<Services />` — 3 grupos: Estética dental / Restauración y salud / Ortodoncia y prótesis
5. `<ProgramaInfantil />` — bloque full, acento amarillo
6. `<ProgramaMayores />` — bloque full, acento morado, layout invertido
7. `<CampanasSalud />` — bloque full, acento verde, responsabilidad social
8. `<PorQueElegirnos />` — fondo morado, grid de 6 cards
9. `<Galeria />` — grid antes/después, placeholder imágenes
10. `<Testimonios />` — 3 cards con reseñas de pacientes
11. `<Contacto />` — formulario email + info de contacto + mapa + botón WhatsApp
12. `<Footer />` — links, redes sociales, horario, copyright

---

## 6. Funcionalidades clave

### Botón WhatsApp
- Número: `+51985624227`
- Mensaje predeterminado: `"Hola, quisiera agendar una cita en Dental Yess 😊"`
- URL: `https://wa.me/51985624227?text=Hola%2C%20quisiera%20agendar%20una%20cita%20en%20Dental%20Yess%20%F0%9F%98%8A`
- Implementar como `<a>` con `target="_blank" rel="noopener noreferrer"`.
- Presente en: Hero, sección Contacto, y botón flotante en mobile.

### Formulario de contacto
- Campos: nombre, teléfono, email, servicio de interés (select), mensaje.
- Validación: React Hook Form + validación nativa (no Yup/Zod por simplicidad).
- Envío: `POST /api/contact` → Resend → email a la Dra. Yessenia.
- Estados: idle → loading → success / error con feedback visual.
- Variable de entorno requerida: `RESEND_API_KEY`.

### Mapa
- Google Maps embed estático con la dirección: "Calle Lima 567, Ica, Peru".
- Implementar como `<iframe>` con `loading="lazy"`.

### Botón flotante mobile
- Solo visible en pantallas `< md`.
- Ícono WhatsApp verde, posición `fixed bottom-6 right-6`.
- Framer Motion: entrada con `spring` desde abajo.

---

## 7. Responsive design

| Breakpoint | Comportamiento |
|---|---|
| `sm` (640px) | Smartphone: layout en columna, nav colapsado en hamburger |
| `md` (768px) | Tablet: grid 2 columnas en servicios y why |
| `lg` (1024px) | Desktop: layout completo, hero con imagen lateral |

### Reglas responsive
- Mobile-first: escribir estilos base para mobile, luego `md:` y `lg:`.
- Navbar en mobile: menú hamburger con panel deslizable (Framer Motion `AnimatePresence`).
- Secciones especiales (infantil, mayores, campañas): columna en mobile, fila en `md`.
- Galería: 2 columnas en mobile, 4 en `lg`.

---

## 8. Animaciones (Framer Motion)

| Elemento | Animación |
|---|---|
| Hero h1 + p | `fadeInUp` con stagger 0.15s al montar |
| Sección cards | `fadeInUp` con `whileInView` + `viewport once` |
| Botón CTA | `whileHover: scale 1.03` + `whileTap: scale 0.97` |
| Navbar mobile | `AnimatePresence` slide desde arriba |
| Botón flotante WA | `spring` entrada desde abajo |
| Blobs Hero | `animate` rotación suave infinita con `duration: 20` |

### Reglas de animación
- Usar `viewport={{ once: true }}` en todos los `whileInView` para no re-animar al hacer scroll.
- `duration` máximo: 0.6s para transiciones UI, 20s+ para ambientales.
- No animar elementos decorativos en mobile para preservar performance.

---

## 9. SEO y metadata

Definir en `app/layout.js`:

```js
export const metadata = {
  title: 'Dental Yess — Centro Odontológico | Ica, Perú',
  description: 'Diseñamos y devolvemos sonrisas. Cirujano dentista en Ica, Perú. Blanqueamiento, diseño de sonrisa, ortodoncia, carillas y más. Atención previa cita.',
  keywords: 'dentista ica, consultorio dental ica, blanqueamiento dental ica, diseño de sonrisa ica, ortodoncia ica',
  openGraph: {
    title: 'Dental Yess — Centro Odontológico',
    description: 'Diseñamos y devolvemos sonrisas. Ica, Perú.',
    url: 'https://dentalyess.com',
    siteName: 'Dental Yess',
    locale: 'es_PE',
    type: 'website',
  },
}
```

---

## 10. Variables de entorno

Archivo `.env.local` (nunca commitear):

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL_TO=yessenia@dentalyess.com
```

Archivo `.env.example` (sí commitear):

```env
RESEND_API_KEY=
CONTACT_EMAIL_TO=
```

---

## 11. Buenas prácticas obligatorias

### Código
- Nombres de componentes en **PascalCase**.
- Nombres de archivos de componentes en **PascalCase** (`Hero.jsx`).
- Nombres de variables y funciones en **camelCase**.
- Ningún componente supera las **200 líneas**; dividir si es necesario.
- Extraer datos estáticos (servicios, testimonios, etc.) a archivos `data/` como arrays de objetos.

### Imágenes
- Usar siempre `next/image` (`<Image />`).
- Definir `width`, `height` y `alt` descriptivo en todas las imágenes.
- Formato WebP preferido para fotografías.
- Placeholder: `blur` con `blurDataURL` para imágenes críticas (Hero, About).

### Accesibilidad
- Todos los botones e íconos interactivos con `aria-label`.
- Contraste mínimo AA en todos los textos.
- Navegación por teclado funcional en formulario y menú mobile.

### Performance
- No cargar fuentes externas fuera de `next/font`.
- Lazy load en secciones fuera del viewport inicial (`loading="lazy"` en iframe, `whileInView` en Framer Motion).
- No bloquear el hilo principal con animaciones CSS pesadas en mobile.

---

## 12. Datos de contacto (constantes del proyecto)

```js
// lib/constants.js
export const CONTACT = {
  phone: '+51985624227',
  whatsappUrl: 'https://wa.me/51985624227?text=Hola%2C%20quisiera%20agendar%20una%20cita%20en%20Dental%20Yess%20%F0%9F%98%8A',
  address: 'Calle Lima N° 567, 2do piso, Ica, Perú',
  hours: 'Lunes a Sábado · 9:00 a.m. – 7:00 p.m.',
  modality: 'Atención previa cita',
  instagram: 'https://instagram.com/dentalyess',
  facebook: 'https://facebook.com/dentalyess',
}
```

---

## 13. Comandos del proyecto

```bash
pnpm install          # Instalar dependencias
pnpm dev              # Servidor de desarrollo (localhost:3000)
pnpm build            # Build de producción
pnpm start            # Servidor de producción local
pnpm lint             # ESLint
```

---

## 14. Reglas especiales de comunicación y bitácora

- **Saludo "hola":** Cada vez que el usuario inicie la interacción saludando con un "hola", el agente deberá:
  1. Desplegar/ejecutar el proyecto en local (`pnpm dev` si ya está creado) para asegurar que esté corriendo.
  2. Comunicar los últimos ajustes y avances realizados en el proyecto.
- **Archivo `vitacora.md`:** Se mantendrá un archivo `vitacora.md` en la raíz del proyecto para registrar cronológicamente:
  - Ajustes y avances realizados.
  - Errores encontrados y sus soluciones detalladas.
  - Lecciones aprendidas para evitar la repetición de fallos.

---

*Última actualización: Mayo 2026 — v1.1*
*Elaborado para uso con agentes de desarrollo AI (Claude Code, Cursor, Copilot)*

