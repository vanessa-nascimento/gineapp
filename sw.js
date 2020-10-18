importScripts('/cache-polyfill.js');

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(airhorner).then(function (cache) {
      return cache.addAll([
        '/index.html',
        '/cadastro.html',
        '/app-inicial.html',
        '/manifest.js',
        '/styles.css',
      ]);
    })
  )
});

self.addEventListener('activate', function activator(event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys
        .filter(function (key) {
          return key.indexOf(airhorner) !== 0;
        })
        .map(function (key) {
          return caches.delete(key);
        })
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      return cachedResponse || fetch(event.request);
    })
  );
});