export const SITE_URL = 'https://lincahrentcar.com';

/**
 * Normalizes an internal path so it always uses a trailing slash,
 * matching `trailingSlash: 'always'` in astro.config.mjs and the URLs
 * actually served by the production host.
 * Absolute URLs, protocol-relative URLs, and non-http schemes are left untouched.
 */
export function withSlash(path: string): string {
  if (!path) return '/';
  if (/^[a-z][a-z0-9+.-]*:/i.test(path) || path.startsWith('//')) return path;

  const match = path.match(/^([^?#]*)([?#].*)?$/);
  let base = match?.[1] ?? '';
  const suffix = match?.[2] ?? '';

  if (!base || base === '.') return `/${suffix}`;
  if (!base.startsWith('/')) base = `/${base}`;
  if (!base.endsWith('/')) base = `${base}/`;

  return `${base}${suffix}`;
}

/**
 * Builds an absolute URL on the production domain with a guaranteed trailing slash.
 */
export function absUrl(path: string): string {
  const normalized = withSlash(path);
  if (/^https?:\/\//i.test(normalized)) return normalized;
  return new URL(normalized, SITE_URL).href;
}
