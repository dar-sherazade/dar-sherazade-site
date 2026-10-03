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
  name: 'Shera Creates',
  /** Short line used under the name and in the footer. */
  tagline: 'Algerian dress, archives and contemporary creation.',
  /** Default description for search engines and link previews. */
  description:
    'Shera Creates is an independent cultural project documenting Algerian kaftans and related dress traditions through craft, archives, images and contemporary creation.',
  instagramHandle: '@sheracreates',
  instagramUrl: 'https://www.instagram.com/sheracreates/',
  email: 'YOUR_EMAIL_ADDRESS',
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
  { label: 'Archive', href: '/archive/' },
  { label: 'Journal', href: '/journal/' },
  { label: 'Available', href: '/available/' },
  { label: 'About', href: '/about/' },
] as const;

/** Footer navigation, in display order (Instagram is added automatically). */
export const footerNav = [
  { label: 'Archive', href: '/archive/' },
  { label: 'Journal', href: '/journal/' },
  { label: 'Available', href: '/available/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
] as const;
