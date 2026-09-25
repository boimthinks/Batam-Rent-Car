export function getAlternateUrl(currentPath: string, targetLang: 'id' | 'en'): string {
  const path = currentPath === '/' ? '/' : currentPath.replace(/\/$/, '');

  if (targetLang === 'en') {
    if (path === '/' || path === '') return '/en';
    if (path.startsWith('/en')) return path; // Already English
    if (path === '/mobil') return '/en/car';
    if (path.startsWith('/mobil/')) return path.replace('/mobil/', '/en/car/');
    if (path === '/layanan') return '/en/layanan';
    if (path.startsWith('/layanan/')) return path.replace('/layanan/', '/en/layanan/');
    if (path === '/lokasi') return '/en/lokasi';
    if (path.startsWith('/lokasi/')) return path.replace('/lokasi/', '/en/lokasi/');
    if (path === '/blog') return '/en/guide';
    if (path.startsWith('/blog/')) return path.replace('/blog/', '/en/guide/');
    return `/en${path}`;
  } else {
    // targetLang === 'id'
    if (path === '/en' || path === '/en/') return '/';
    if (!path.startsWith('/en')) return path; // Already Indonesian
    if (path === '/en/car') return '/mobil';
    if (path.startsWith('/en/car/')) return path.replace('/en/car/', '/mobil/');
    if (path === '/en/layanan') return '/layanan';
    if (path.startsWith('/en/layanan/')) return path.replace('/en/layanan/', '/layanan/');
    if (path === '/en/lokasi') return '/lokasi';
    if (path.startsWith('/en/lokasi/')) return path.replace('/en/lokasi/', '/lokasi/');
    if (path === '/en/guide') return '/blog';
    if (path.startsWith('/en/guide/')) return path.replace('/en/guide/', '/blog/');
    return path.replace(/^\/en/, '') || '/';
  }
}
