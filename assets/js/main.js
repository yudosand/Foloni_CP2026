(() => {
  // Navbar backdrop on scroll
  const nav = document.querySelector('.navbar');
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('navbar-scrolled', window.scrollY > 10);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Auto set active navbar by current page
document.addEventListener("DOMContentLoaded", () => {
  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  document.querySelectorAll(".navbar .nav-link").forEach(link => {
    const href = (link.getAttribute("href") || "").toLowerCase();

    // cocokkan file (index.html, about.html, dst)
    const isActive = href === current || (current === "" && href === "index.html");
    link.classList.toggle("active", isActive);
  });
});

  // AOS (Animate on Scroll) init (loaded via CDN)
  if (window.AOS) {
    window.AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    });
  }

  // Smooth active nav highlighting for in-page anchors (onlyP)
  const spySections = document.querySelectorAll('[data-spy-section]');
  const spyLinks = document.querySelectorAll('[data-spy-link]');
  if (spySections.length && spyLinks.length && 'IntersectionObserver' in window) {
    const map = new Map();
    spyLinks.forEach(a => map.set(a.getAttribute('href'), a));

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          spyLinks.forEach(a => a.classList.remove('active'));
          const id = '#' + e.target.id;
          const a = map.get(id);
          if (a) a.classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0.05 });

    spySections.forEach(s => io.observe(s));
  }
})();
