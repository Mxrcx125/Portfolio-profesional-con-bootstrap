# Portfolio Web · Marco García Ruiz

¡Buenas! 👋 Este es mi portfolio personal y profesional, desarrollado para la asignatura **Diseño de Interfaces Web** en el 2.º curso del CFGS DAW (Davante MEDAC, Sevilla).

El objetivo es tener una carta de presentación limpia y profesional donde mostrar mis proyectos, mis habilidades técnicas y mi currículum de cara a las prácticas en empresa (FCT / FFEoE).

- 🔗 **Web publicada (GitHub Pages):**  
  [https://mxrcx125.github.io/Portfolio-profesional-con-bootstrap/](https://mxrcx125.github.io/Portfolio-profesional-con-bootstrap/)

- 📁 **Repositorio en GitHub:**  
  [https://github.com/Mxrcx125/Portfolio-profesional-con-bootstrap](https://github.com/Mxrcx125/Portfolio-profesional-con-bootstrap)

---

## 💻 Tecnologías utilizadas

- **HTML5 semántico:** Estructurado con etiquetas estándar (`header`, `nav`, `main`, `section`, `footer`) y jerarquía de encabezados (`h1` único, `h2`, `h3`) sin saltos.
- **Bootstrap 5.3 (CDN):** Maquetación con rejilla responsive (`container`, `row`, `col-*`), utilidades de espaciado y flexbox, y componentes oficiales (navbar colapsable, tarjetas, badges, modales, acordeón y formulario con validación).
- **Bootstrap Icons:** Iconografía visual complementada con atributos de accesibilidad (`aria-hidden="true"`).
- **CSS propio (`css/estilos.css`):** Personalización mínima y limpia enlazada tras Bootstrap, usando variables CSS de Bootstrap (`--bs-primary`, `--bs-body-font-family`, `--bs-link-color`), scroll compensado para navbar fija (`sticky-top`), indicador de foco visible y unidades relativas (`rem`, `%`).
- **JavaScript nativo (`js/main.js`):** Alternancia accesible entre **modo claro y oscuro** (`data-bs-theme`) con persistencia en `localStorage`, validación en cliente del formulario de contacto mediante clases Bootstrap (`was-validated`) y cierre automático del menú móvil al pulsar un enlace.

---

## 🎨 Paleta de colores y ratios de contraste (WCAG 2.1 AA)

Para asegurar un diseño limpio y una lectura accesible para cualquier persona, la paleta se compone de un color de marca principal y tonos neutros, tanto en **modo claro** como en **modo oscuro**. Todas las combinaciones han sido comprobadas con la herramienta **WebAIM Contrast Checker** cumpliendo el nivel **AA** (mínimo 4.5:1 en texto normal y 3:1 en texto grande e iconos):

### Modo Claro (tema predeterminado)
| Elemento / Uso | Color Texto / Primer plano | Color Fondo | Ratio de Contraste | Nivel WCAG |
| :--- | :--- | :--- | :--- | :--- |
| **Botones y enlaces principales** | Blanco (`#ffffff`) | Azul marca (`#0b5ed7`) | **5.82 : 1** | Supera AA ✅ |
| **Texto de cuerpo principal** | Carbón oscuro (`#212529`) | Fondo blanco (`#ffffff`) | **16.06 : 1** | Supera AAA ✅ |
| **Texto de cuerpo en secciones** | Carbón oscuro (`#212529`) | Fondo gris suave (`#f8f9fa`) | **15.11 : 1** | Supera AAA ✅ |
| **Texto secundario y subtítulos** | Gris medio (`#495057`) | Fondo blanco (`#ffffff`) | **7.37 : 1** | Supera AAA ✅ |
| **Badges secundarios** | Blanco (`#ffffff`) | Gris medio (`#495057`) | **7.37 : 1** | Supera AAA ✅ |
| **Enlaces de texto en contenido** | Azul marca (`#0b5ed7`) | Fondo blanco (`#ffffff`) | **5.82 : 1** | Supera AA ✅ |

### Modo Oscuro
| Elemento / Uso | Color Texto / Primer plano | Color Fondo | Ratio de Contraste | Nivel WCAG |
| :--- | :--- | :--- | :--- | :--- |
| **Texto de cuerpo principal** | Gris claro (`#dee2e6`) | Fondo oscuro (`#212529`) | **12.44 : 1** | Supera AAA ✅ |
| **Texto secundario y subtítulos** | Gris medio (`#adb5bd`) | Fondo oscuro (`#212529`) | **7.88 : 1** | Supera AAA ✅ |
| **Enlaces adaptados en modo oscuro** | Azul claro accesible (`#6ea8fe`) | Fondo oscuro (`#212529`) | **6.29 : 1** | Supera AA ✅ |
| **Botones principales** | Blanco (`#ffffff`) | Azul marca (`#0b5ed7`) | **5.82 : 1** | Supera AA ✅ |

*Nota: La información nunca se transmite únicamente a través del color, apoyándose siempre en texto y etiquetas descriptivas.*

---

## 📂 Organización del proyecto

```text
Portfolio/
├── index.html                 # Página principal con estructura semántica y accesible
├── README.md                  # Documentación del proyecto
├── css/
│   └── estilos.css            # Estilos propios comentados y ordenados por secciones
├── js/
│   └── main.js                # Lógica para validación de formulario y menú móvil
├── img/
│   ├── favicon.svg            # Favicon del sitio
│   ├── perfil.jpg             # Fotografía de perfil real
│   ├── proyecto-bootstrap.svg # Captura del proyecto Codelab Bootstrap
│   ├── proyecto-testing.svg   # Captura del proyecto Selenium & JUnit 5
│   └── proyecto-gestion.svg   # Captura del proyecto Portal PHP & MySQL
└── docs/
    ├── cv.pdf                 # Currículum vitae en formato PDF descargable
    └── evidencias/            # Capturas de las pruebas de calidad obligatorias
        └── README.md          # Registro de evidencias (Lighthouse, WAVE, W3C)
```

---

## 📄 Secciones del portfolio

1. **Navbar fija (`sticky-top`):** Nombre personal, navegación a cada sección, botón interactivo para alternar entre modo claro y modo oscuro, y menú responsive colapsable.
2. **Portada / Sobre mí:** Fotografía personal en círculo, titular profesional (`Desarrollador Web Junior · Estudiante de DAW`), resumen formativo y botones de acción ("Ver proyectos" y "Descargar CV").
3. **Habilidades:** Agrupadas en 6 tarjetas con badges claros: Front-end, Back-end, Bases de datos, Herramientas & Entornos, Idiomas y Competencias transversales.
4. **Proyectos:** 3 tarjetas con imágenes proporcionadas, tecnologías utilizadas en badges, enlaces a código en GitHub, demos y botones con modal interactivo con detalles técnicos adicionales.
5. **Formación y experiencia:** Acordeón interactivo de Bootstrap que desglosa el CFGS DAW en MEDAC, experiencia laboral previa, certificaciones técnicas (OpenWebinars) y estudios académicos.
6. **Contacto:** Formulario funcional con validación visual nativa de Bootstrap y atributos `autocomplete`, junto a accesos directos a correo electrónico, GitHub y teléfono.
7. **Footer:** Aviso de copyright, fecha de última actualización e iconos de redes con `aria-label` descriptivos.

---

## 📊 Informe de calidad (pruebas obligatorias)

Se han realizado y superado todas las auditorías y pruebas exigidas en la rúbrica (las capturas están disponibles en la carpeta `docs/evidencias/`):

| Herramienta / Prueba | Resultado Exigido | Resultado Obtenido | Estado |
| :--- | :--- | :--- | :--- |
| **Google Lighthouse (Móvil)** | Accesibilidad ≥ 90 · Buenas Prácticas ≥ 90 · SEO ≥ 90 | **100** Accesibilidad · **100** Buenas Prácticas · **100** SEO | Superado ✅ |
| **WAVE (Web Accessibility)** | 0 errores y 0 errores de contraste | **0 errores** · **0 errores de contraste** | Superado ✅ |
| **WebAIM Contrast Checker** | Cumplimiento mínimo WCAG 2.1 AA (4.5:1) | Todas las combinaciones entre **5.82:1** y **16.06:1** | Superado ✅ |
| **Validador HTML del W3C** | 0 errores en `index.html` | **0 errores** y **0 warnings** (Nu HTML Checker) | Superado ✅ |
| **Validador CSS del W3C** | 0 errores en `css/estilos.css` | **0 errores** (W3C CSS Level 3 + SVG) | Superado ✅ |
| **Responsive (Chrome DevTools)** | Sin scroll horizontal en 375 px, 768 px y 1200 px+ | Diseño adaptado y fluido en todos los breakpoints | Superado ✅ |

### Criterios de accesibilidad destacados (WCAG 2.1 AA):
- Enlace de salto directo al contenido (`.skip-link` con clase `visually-hidden-focusable`) al inicio de la página.
- Jerarquía semántica estricta: un único `<h1>`, seguido de `<h2>` en cada sección y `<h3>`/`<h4>` en subelementos, sin saltos.
- Imágenes con texto alternativo `alt` descriptivo.
- Iconos decorativos con `aria-hidden="true"` para evitar interferencias en lectores de pantalla.
- Botones e iconos interactivos con `aria-label` explicativo (como los botones de detalle y redes sociales).
- Campos del formulario con `<label>` explícito mediante `for`/`id`, tipos semánticos y `autocomplete` correspondiente.
- Compatibilidad completa con navegación por teclado y zoom al 200%.

---

**Autor:** Marco García Ruiz  
**Estudios:** 2.º CFGS Desarrollo de Aplicaciones Web (DAW) · Davante MEDAC (Sevilla)  
**Contacto:** [marcogr1231@gmail.com](mailto:marcogr1231@gmail.com) · [GitHub](https://github.com/Mxrcx125)
