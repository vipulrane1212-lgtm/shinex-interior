/**
 * Resolves static asset paths properly across:
 * 1. Subpath deployments (e.g. GitHub Pages at /shinex-interior)
 * 2. Root deployments (e.g. Vercel, Netlify, custom domain at /)
 */
export function getAssetUrl(path: string | undefined | null): string {
  if (!path) return '';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }

  // In Next.js with basePath configured, client-side window pathname can also inform us
  let basePath = process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : '/shinex-interior';

  // If running in browser and URL contains /shinex-interior, ensure prefix
  if (typeof window !== 'undefined') {
    if (window.location.pathname.startsWith('/shinex-interior')) {
      basePath = '/shinex-interior';
    } else if (window.location.hostname !== 'localhost' && !window.location.pathname.includes('/shinex-interior')) {
      // If deployed on a custom root domain (like Vercel shinex.vercel.app), no subpath needed
      if (process.env.NEXT_PUBLIC_BASE_PATH === undefined) {
        basePath = '';
      }
    }
  }

  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  if (!basePath || basePath === '/') {
    return cleanPath;
  }

  if (cleanPath.startsWith(basePath)) {
    return cleanPath;
  }

  return `${basePath}${cleanPath}`;
}
