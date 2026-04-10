const CACHE_NAME = "trauma-channel-beta-v1";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./style.css?v=20260409-05",
  "./app.js?v=20260409-05",
  "./manifest.webmanifest",
  "./assets/skeleton-base.png",
  "./assets/icons/app-icon.svg",
  "./assets/icons/app-icon-maskable.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        if (
          networkResponse &&
          networkResponse.status === 200 &&
          (requestUrl.pathname.startsWith("/clasificaciones-ortopedicas/assets/") ||
            requestUrl.pathname.endsWith(".html") ||
            requestUrl.pathname.endsWith(".css") ||
            requestUrl.pathname.endsWith(".js") ||
            requestUrl.pathname.endsWith(".webmanifest"))
        ) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
        }

        return networkResponse;
      }).catch(() => caches.match("./index.html"));
    })
  );
});
