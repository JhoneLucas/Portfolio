/* ==========================================================================
   PORTFÓLIO JHONE DINIZ - INTERATIVIDADE & FILTROS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Filtragem dinâmica de Projetos por Abas
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove a classe active de todos os botões
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectItems.forEach(item => {
        const category = item.getAttribute('data-category');

        if (filterValue === 'all' || category.includes(filterValue)) {
          item.style.display = 'block';
          item.classList.add('animate-fade-in');
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 2. Highlighting ativo dos links do menu durante o scroll
  const sections = document.querySelectorAll('section[id], div[id="projetos"], div[id="experiencias"]');
  const navLinks = document.querySelectorAll('.nav-link-custom');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // 3. Fechar menu mobile automaticamente ao clicar em um link
  const navbarCollapse = document.getElementById('navbarContent');
  if (navbarCollapse) {
    const navItems = navbarCollapse.querySelectorAll('a');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: true });
          bsCollapse.hide();
        }
      });
    });
  }
});
