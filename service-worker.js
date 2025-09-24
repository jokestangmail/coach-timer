
  const CACHE = "coach-timer-pwa-v2";
  const ASSETS = ["index.html","manifest.json","icon-192.png","icon-512.png","apple-touch-icon.png"];

  self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
    );
  });

  self.addEventListener("activate", (event) => {
    event.waitUntil(self.clients.claim());
  });

  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((res) => res || fetch(event.request))
    );
  });
