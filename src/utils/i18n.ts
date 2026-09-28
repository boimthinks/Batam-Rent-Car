import { withSlash } from './url';

/**
 * Maps a page path to its counterpart in the other language.
 * Always returns a trailing-slash path to match `trailingSlash: 'always'`.
 */
export function getAlternateUrl(currentPath: string, targetLang: 'id' | 'en'): string {
  const path = currentPath === '/' ? '/' : currentPath.replace(/\/$/, '');

  // 404 has no counterpart in the other language
  if (path === '/404' || path === '/404.html') return targetLang === 'en' ? '/en/' : '/';

  if (targetLang === 'en') {
    if (path === '/' || path === '') return '/en/';
    if (path.startsWith('/en')) return withSlash(path); // Already English
    if (path === '/mobil') return '/en/car/';
    if (path.startsWith('/mobil/')) return withSlash(path.replace('/mobil/', '/en/car/'));
    if (path === '/layanan') return '/en/layanan/';
    if (path.startsWith('/layanan/')) return withSlash(path.replace('/layanan/', '/en/layanan/'));
    if (path === '/lokasi') return '/en/lokasi/';
    if (path.startsWith('/lokasi/')) return withSlash(path.replace('/lokasi/', '/en/lokasi/'));
    if (path === '/blog') return '/en/guide/';
    if (path.startsWith('/blog/')) return withSlash(path.replace('/blog/', '/en/guide/'));
    return withSlash(`/en${path}`);
  }

  // targetLang === 'id'
  if (path === '/en' || path === '/en/') return '/';
  if (!path.startsWith('/en')) return withSlash(path); // Already Indonesian
  if (path === '/en/car') return '/mobil/';
  if (path.startsWith('/en/car/')) return withSlash(path.replace('/en/car/', '/mobil/'));
  if (path === '/en/layanan') return '/layanan/';
  if (path.startsWith('/en/layanan/')) return withSlash(path.replace('/en/layanan/', '/layanan/'));
  if (path === '/en/lokasi') return '/lokasi/';
  if (path.startsWith('/en/lokasi/')) return withSlash(path.replace('/en/lokasi/', '/lokasi/'));
  if (path === '/en/guide') return '/blog/';
  if (path.startsWith('/en/guide/')) return withSlash(path.replace('/en/guide/', '/blog/'));
  return withSlash(path.replace(/^\/en/, '')) || '/';
}
