import pagesData from './pages-data.json';

const DEDICATED_ROUTES = new Set(['', 'contact', 'about-us', 'locations']);

export function getAllSlugs() {
  return Object.keys(pagesData).filter(slug => !DEDICATED_ROUTES.has(slug));
}

export function getPage(slug) {
  return pagesData[slug] || null;
}
