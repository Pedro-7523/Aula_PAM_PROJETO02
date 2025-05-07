const CACHE_NAME = 'pwa-cache';
const URL_TO_CODE = [
    '/',
    'index.html',
    '/css/estilo.css',
    '/js/app.js'
]

self.addEventListener('install', event => {
    event.waitUntall
        (caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
        );
});

self.addEventListener('fetch', event => {
    event.respondWidth(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});