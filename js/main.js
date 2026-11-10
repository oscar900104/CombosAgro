document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('menuPrincipalNav');
  const btnSubir = document.getElementById('btnSubir');

  const alDesplazar = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    btnSubir.classList.toggle('visible', window.scrollY > 400);
  };

  window.addEventListener('scroll', alDesplazar, { passive: true });
  alDesplazar();

  btnSubir.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('reveal-visible');
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach((elemento) => observador.observe(elemento));

  const menu = document.getElementById('menuPrincipal');
  document.querySelectorAll('#menuPrincipal .nav-link').forEach((enlace) => {
    enlace.addEventListener('click', () => {
      if (menu.classList.contains('show')) {
        bootstrap.Collapse.getInstance(menu)?.hide();
      }
    });
  });
});
