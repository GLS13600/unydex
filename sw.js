// Généré par scripts/build-sw.mjs — ne pas éditer à la main.
const CACHE = 'unydex-20261123170710';
const SHELL = [
  "./",
  "./index.html",
  "./icon.svg",
  "./assets/compte-natif-CB_N_ZW_.js",
  "./assets/index-D5bMjAqh.js",
  "./assets/index-DCYyA1qt.css",
  "./assets/index-DzuhQIl3.js",
  "./assets/learnsets-vg-yNECzyJ5.js",
  "./assets/scan-worker-RLWO-DSL.js"
];

const abs = (r) => new URL(r, self.location).href;

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    // Un fichier manquant ne doit pas faire échouer toute l'installation.
    await Promise.all(SHELL.map((u) => c.add(u).catch(() => {})));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

// Les notifications du site (13/11/2026) : la fonction notifie envoie { titre, corps, url,
// tag }. Toucher la notification ramène à l'appli ouverte (qui va à la page) ou l'ouvre.
self.addEventListener('push', (e) => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch { d = { corps: e.data ? e.data.text() : '' }; }
  e.waitUntil(self.registration.showNotification(d.titre || 'Unydex', {
    body: d.corps || '',
    icon: './icone-192.png',
    badge: './icone-192.png',
    tag: d.tag || undefined,
    renotify: !!d.tag,
    data: { url: d.url || './' },
  }));
});

self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const url = new URL((e.notification.data && e.notification.data.url) || './', self.registration.scope).href;
  e.waitUntil((async () => {
    const fenetres = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const c of fenetres) {
      if ('focus' in c) { c.postMessage({ notif: url }); return c.focus(); }
    }
    return self.clients.openWindow(url);
  })());
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== self.location.origin) return;

  // La page elle-même : RÉSEAU D'ABORD, pour qu'un nouveau déploiement soit pris en
  // compte dès le rechargement suivant. Le cache prend le relais hors ligne.
  if (req.mode === 'navigate') {
    e.respondWith((async () => {
      try {
        const r = await fetch(req);
        (await caches.open(CACHE)).put(abs('./index.html'), r.clone());
        return r;
      } catch {
        return (await caches.match(abs('./index.html'))) ?? Response.error();
      }
    })());
    return;
  }

  // Tout le reste : CACHE D'ABORD. Les noms portent une empreinte (assets) ou ne
  // changent jamais de contenu (sprites, fonds, objets, symboles de type) : un
  // cache périmé est donc impossible.
  e.respondWith((async () => {
    const hit = await caches.match(req);
    if (hit) return hit;
    try {
      const r = await fetch(req);
      if (r.ok) (await caches.open(CACHE)).put(req, r.clone());
      return r;
    } catch {
      return Response.error();
    }
  })());
});
