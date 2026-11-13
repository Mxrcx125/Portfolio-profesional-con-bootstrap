# Portfolio Profesional · Marco García Ruiz

Portfolio profesional desarrollado como parte de la **Entrega 1 (UD6) — Estructura, contenido y maquetación** del módulo **Diseño de Interfaces Web (2.º DAW)** en **MEDAC**.

🔗 **Sitio Web Publicado (GitHub Pages):**  
[https://mxrcx125.github.io/Portfolio-profesional-con-bootstrap/](https://mxrcx125.github.io/Portfolio-profesional-con-bootstrap/)

📁 **Repositorio de GitHub:**  
[https://github.com/Mxrcx125/Portfolio-profesional-con-bootstrap](https://github.com/Mxrcx125/Portfolio-profesional-con-bootstrap)

---

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Marcado semántico (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), jerarquía clara de encabezados (`h1` único, `h2`, `h3`) y validación W3C con 0 errores.
- **Bootstrap 5.3:** Maquetación responsiva resuelta íntegramente mediante la rejilla oficial (`container`, `row`, `col-*`) y clases de utilidad nativas (espaciado, flexbox, tipografía y bordes), sin necesidad de CSS personalizado.
- **Bootstrap Icons 1.11:** Iconografía vectorial cargada vía CDN.
- **JavaScript (ES6+):** Validación de formularios interactiva en cliente (`needs-validation`), alternancia de modo claro/oscuro con guardado en `localStorage`, cierre automático del menú móvil y ventanas modales de Bootstrap.
- **Git & GitHub Pages:** Control de versiones y despliegue continuo en la web.

---

## 📂 Estructura del Repositorio

```text
Portfolio-profesional-con-bootstrap/
├── index.html                 # Página principal con maquetación completa en Bootstrap 5.3
├── README.md                  # Documentación del proyecto y enlaces de entrega
├── js/
│   └── main.js                # Validación del formulario, modo claro/oscuro y navegación
├── img/
│   ├── favicon.svg            # Favicon del sitio web
│   ├── perfil.svg             # Avatar profesional en diseño neutro y sobrio
│   ├── proyecto-bootstrap.svg # Captura representativa: Codelab & Academia Web
│   ├── proyecto-testing.svg   # Captura representativa: Suite de Pruebas Selenium/JUnit 5
│   └── proyecto-gestion.svg   # Captura representativa: Portal de Gestión PHP/MySQL
└── docs/
    └── cv.pdf                 # Currículum Vitae descargable en formato PDF
```

---

## 📋 Secciones del Portfolio

1. **Navbar:** Fija en la parte superior (`sticky-top`), colapsable para dispositivos móviles, con enlaces a todas las secciones y botón de alternancia entre modo claro y oscuro.
2. **Portada · Sobre mí (`#sobre-mi`):** Avatar, nombre completo con el único `<h1>` del documento, titular formativo (*Desarrollador Web Junior · 2.º CFGS DAW*), presentación profesional y botones de acceso directo a proyectos y descarga de CV.
3. **Habilidades (`#habilidades`):** Competencias agrupadas en tarjetas de diseño sobrio (Front-end, Back-end, Bases de datos, Herramientas & Testing, Idiomas y Competencias) con badges de Bootstrap.
4. **Proyectos (`#proyectos`):** 3 proyectos con capturas, descripciones técnicas, badges de tecnologías y enlaces directos a demos, repositorios en GitHub y modales con información ampliada.
5. **Formación y Experiencia (`#formacion`):** Acordeón interactivo con los módulos cursados en DAW (MEDAC), preparación para prácticas en empresa (FFEOE / FCT), certificaciones y bachillerato.
6. **Contacto (`#contacto`):** Formulario maquetado con Bootstrap, labels asociados por `id`/`for`, validación visual y enlaces a email, GitHub y LinkedIn.
7. **Footer:** Copyright, enlaces sociales con atributos `aria-label` de accesibilidad y fecha de última actualización.

---

## 🚀 Publicación en GitHub Pages

1. Repositorio público configurado en GitHub.
2. En los ajustes del repositorio: **Settings → Pages → Source: Deploy from a branch → main / (root)**.
3. El portfolio se visualiza en: [https://mxrcx125.github.io/Portfolio-profesional-con-bootstrap/](https://mxrcx125.github.io/Portfolio-profesional-con-bootstrap/).

---

**Autor:** Marco García Ruiz  
**Módulo:** Diseño de Interfaces Web (DAW)  
**Fecha:** Noviembre 2026
