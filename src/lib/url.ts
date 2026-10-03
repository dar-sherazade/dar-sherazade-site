/**
 * Prefixes an internal path with the site's base path, so links keep
 * working when the site is served from https://<user>.github.io/<repo>/.
 *
 *   url('/archive/')  →  '/archive/'  or  '/<repo>/archive/'
 */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

/** Turns a label into a value that is safe for data attributes. */
export function toKey(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/** Formats a date as "3 October 2026". */
export function formatDate(date: Date, locale = 'en-GB'): string {
  return date.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

/** Formats an order number as "01". */
export function pad(n: number): string {
  return String(n).padStart(2, '0');
}
