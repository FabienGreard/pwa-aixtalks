const urlsToCache = [
  '/',
  '/src/styles.css',
  '/src/index.js',
  '/src/icon-192x192.png',
  '/src/icon-512x512.png',
];

self.addEventListener('install', event => {
  console.log('installing..');
  // Cache site
  event.waitUntil(
    caches
      .open('my-dog-finder-app-cache-v1')
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  console.log('activating...');
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  /* Serve the site from cache */
  if (url.origin == location.origin && urlsToCache.includes(url.pathname)) {
    event.respondWith(caches.match(url.pathname));
  }
});
