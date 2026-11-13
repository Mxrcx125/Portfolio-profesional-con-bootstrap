// ============================================================
// JavaScript del Portfolio · Marco García Ruiz
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Alternancia de Modo Claro / Modo Oscuro (Persistencia en localStorage)
  const themeToggleBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const htmlElement = document.documentElement;

  // Cargar preferencia guardada o del sistema
  const savedTheme = localStorage.getItem('portfolio-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

  applyTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-bs-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
    });
  }

  function applyTheme(theme) {
    htmlElement.setAttribute('data-bs-theme', theme);
    if (themeIcon) {
      if (theme === 'dark') {
        themeIcon.className = 'bi bi-sun-fill text-warning';
      } else {
        themeIcon.className = 'bi bi-moon-stars-fill text-secondary';
      }
    }
  }

  // 2. Validación y envío interactivo del formulario de contacto
  const forms = document.querySelectorAll('.needs-validation');
  const formSuccessAlert = document.getElementById('formSuccessAlert');

  forms.forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      event.stopPropagation();

      if (form.checkValidity()) {
        if (formSuccessAlert) {
          formSuccessAlert.classList.remove('d-none');
          formSuccessAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        form.reset();
        form.classList.remove('was-validated');
      } else {
        form.classList.add('was-validated');
      }
    });
  });

  // 3. Cerrar automáticamente la barra de navegación en móviles al hacer clic en un enlace
  const navLinks = document.querySelectorAll('.navbar-collapse .nav-link');
  const navbarCollapse = document.getElementById('navbarNav');

  if (navbarCollapse) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
          }
        }
      });
    });
  }
});
