/**
 * Small site script (no libraries):
 *  1. reveals elements as they scroll into view,
 *  2. makes the header solid after scrolling,
 *  3. opens and closes the full-screen mobile menu.
 */

// 1. Scroll reveals
const revealables = document.querySelectorAll<HTMLElement>('.reveal, .reveal-image');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  revealables.forEach((el) => io.observe(el));
} else {
  revealables.forEach((el) => el.classList.add('is-in'));
}

// 2. Header state
const header = document.querySelector<HTMLElement>('[data-header]');
if (header) {
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// 3. Mobile menu
const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const menu = document.querySelector<HTMLElement>('[data-menu]');
if (toggle && menu) {
  const openLabel = toggle.querySelector<HTMLElement>('[data-open-label]');
  const closeLabel = toggle.querySelector<HTMLElement>('[data-close-label]');
  const main = document.getElementById('main');
  const footer = document.querySelector<HTMLElement>('.site-footer');

  const setOpen = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
    menu.inert = !open;
    if (main) main.inert = open;
    if (footer) footer.inert = open;
    if (openLabel) openLabel.hidden = open;
    if (closeLabel) closeLabel.hidden = !open;
    document.documentElement.style.overflow = open ? 'hidden' : '';
    if (open) {
      header?.classList.add('is-scrolled');
      menu.querySelector<HTMLElement>('a')?.focus({ preventScroll: true });
    } else {
      header?.classList.toggle('is-scrolled', window.scrollY > 24);
    }
  };

  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });
  menu.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('a')) setOpen(false);
  });
  window.matchMedia('(min-width: 900px)').addEventListener('change', (e) => {
    if (e.matches) setOpen(false);
  });
}
