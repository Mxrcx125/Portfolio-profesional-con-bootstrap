// ============================================================
// JavaScript del Portfolio · Marco García Ruiz
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Validación de formularios de Bootstrap
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

  // 2. Cerrar automáticamente la barra de navegación en móviles al pulsar un enlace
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
