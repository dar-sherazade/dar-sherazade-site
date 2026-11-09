/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONFIGURATION — the only place to change these values.
 * ─────────────────────────────────────────────────────────────
 *
 *  - email:      replace YOUR_EMAIL_ADDRESS with the real address.
 *  - siteUrl:    the public address of the site, without a trailing
 *                slash. Change it if you move to a custom domain
 *                (for example "https://sheracreates.com").
 *  - instagram:  handle and profile link.
 */
export const siteConfig = {
  name: 'Dar Sherazade',
  /** Short line used under the name and in the footer. */
  tagline: 'Every Kaftan carries the name of an Algerian flower.',
  /** Default description for search engines and link previews. */
  description:
    'Dar Sherazade is an independent cultural project documenting Algerian kaftans and related dress traditions through craft, archives, images and contemporary creation.',
  instagramHandle: '@sheracreates',
  instagramUrl: 'https://www.instagram.com/sheracreates/',
  email: 'sherazadedar@gmail.com',
  siteUrl: 'https://dar-sherazade.github.io',
  /** Language of the site (used for <html lang> and Open Graph). */
  locale: 'en',
  ogLocale: 'en_GB',
  /** Year shown in the footer copyright line. */
  copyrightYear: 2026,
} as const;

/** True until a real email address has been set above. */
export const emailIsPlaceholder = siteConfig.email === 'YOUR_EMAIL_ADDRESS';

/** Main navigation, in display order. */
export const mainNav = [
  { label: 'The Kaftans', href: '/archive/' },
  { label: 'About', href: '/about/' },
] as const;

/** Footer navigation, in display order (Instagram is added automatically). */
export const footerNav = [
  { label: 'The Kaftans', href: '/archive/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
] as const;
