const sections = document.querySelectorAll('main > [id]');
const links = [...document.querySelectorAll('.sidebar nav a')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of links) {
        const active = link.hash === `#${entry.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '-8% 0px -72% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
}
