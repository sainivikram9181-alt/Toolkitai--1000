// ToolkitAI.in - PWA Service Worker
// Founder Vikram Saini Jaipur - Play Store for AI
const CACHE_NAME = 'toolkitai-v2-playstore';
const urlsToCache = [
  '/',
  '/index.html',
  '/app.html',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  console.log('ToolkitAI Installed');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('ToolkitAI Activated');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
