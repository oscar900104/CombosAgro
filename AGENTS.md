# AGENTS.md — Combos Cubanos (Landing Page)

## Descripción del proyecto
Landing page para un negocio de venta de combos de alimentos dirigido a la comunidad cubana en Estados Unidos. Sitio estático, sin frameworks ni build tools. Contenido en español.

## Stack tecnológico
- HTML5 (semántico)
- CSS3 (personalizado)
- Bootstrap 5 (ARCHIVOS LOCALES, nunca CDN)
- JavaScript vanilla (ES6+), sin dependencias externas

## Estructura de carpetas
```
├── index.html              → Página principal de la landing
├── productos.html          → Catálogo de productos agrícolas
├── combos.html             → Catálogo de combos alimenticios
├── AGENTS.md               → Este archivo
├── css/
│   └── styles.css          → Estilos personalizados (siempre después de Bootstrap)
├── js/
│   └── main.js             → Scripts propios (cargar al final del body)
├── img/
│   ├── logo/               → Logotipo y favicon
│   ├── hero/               → Imágenes de portada
│   └── combos/             → Fotos de cada combo de alimentos
└── vendor/                 → Librerías locales (no editar estos archivos)
    ├── bootstrap/
    │   ├── css/bootstrap.min.css
    │   └── js/bootstrap.bundle.min.js
    └── bootstrap-icons/    → Iconos (opcional)
        └── font/
```

## Convenciones de código
- Nombres de archivos y carpetas en minúsculas, sin espacios ni acentos
- Comentarios y contenido visible en español
- HTML semántico: `header`, `nav`, `main`, `section`, `footer`
- Usar el sistema grid y componentes de Bootstrap antes que CSS custom
- CSS custom solo para lo que Bootstrap no cubre (colores de marca, hero, etc.)
- JS: usar `defer`, sin librerías externas (validar formularios con JS nativo)
- Rutas relativas (`../img/combos/...`) — nunca rutas absolutas
- SEO: `meta description`, `title` descriptivo, atributos `alt` en imágenes

## Reglas para el agente
1. Bootstrap SIEMPRE local desde `vendor/`, nunca desde CDN
2. Orden de carga: `bootstrap.min.css` → `styles.css` en el `head`; al final del `body`: `bootstrap.bundle.min.js` → `main.js`
3. Secciones esperadas: hero, catálogo de combos (cards), sobre nosotros, testimonios, contacto/ubicación, footer
4. Diseño responsive obligatorio (mobile-first con grid de Bootstrap)
5. Nombres de combos, platos y referencias culturales cubanas en español
6. No editar archivos dentro de `vendor/`
7. No crear archivos de build, bundlers, `package.json` ni Node

## Comandos
No hay build. Para desarrollo local usar un servidor estático (p. ej. extensión Live Server de VS Code) o abrir `index.html` directamente.
