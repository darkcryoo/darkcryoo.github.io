const CACHE_NAME = 'minblog-cache-v1';
const OFFLINE_URL = '/offline.html';

// Resources to pre-cache
const PRECACHE_URLS = [
  '/',
  '/offline.html',
  '/assets/css/main.css',
  '/assets/css/syntax.css',
  '/assets/favicon/favicon.png',
  '/assets/favicon/apple-touch-icon.png',
  '/manifest.json'
];

// Install event - pre-cache critical resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheName.startsWith('minblog-') && cacheName !== CACHE_NAME)
          .map(cacheName => caches.delete(cacheName))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - network-first strategy with offline fallback
self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  // Skip some types of requests
  const url = new URL(event.request.url);
  if (
    url.pathname.startsWith('/admin') ||
    url.pathname.startsWith('/cdn-cgi') ||
    url.origin !== self.location.origin
  ) return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Cache successful responses
        if (response.ok) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // Return cached response or offline page
        return caches.match(event.request)
          .then(response => {
            if (response) {
              return response;
            }
            // For navigation requests, show offline page
            if (event.request.mode === 'navigate') {
              return caches.match(OFFLINE_URL);
            }
            // Return 404 for other requests
            return new Response('Not found', { status: 404, statusText: 'Not found' });
          });
      })
  );
});
