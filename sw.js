/* ============================================
   KYRIOS DE LOS ANDES - SERVICE WORKER
   ============================================ */

const CACHE_VERSION = 'kyrios-v3.1.0';
const APP_SHELL = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/hls.min.js',
    '/manifest.json',
    '/favicon.svg',
    '/icon-192.png',
    '/icon-512.png',
    '/icon-maskable-192.png',
    '/icon-maskable-512.png',
    '/screenshot-mobile.png'
];

// Instalacion
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_VERSION)
            .then((cache) => {
                // Intentar cachear app shell
                return cache.addAll(APP_SHELL);
            })
            .then(() => {
                // Activar inmediatamente
                return self.skipWaiting();
            })
    );
});

// Activacion - limpiar caches viejos
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames
                        .filter((name) => {
                            return name.startsWith('kyrios-') && name !== CACHE_VERSION;
                        })
                        .map((name) => {
                            console.log('Eliminando cache viejo:', name);
                            return caches.delete(name);
                        })
                );
            })
            .then(() => self.clients.claim())
    );
});

// Estrategia: Cache First con Network Fallback
self.addEventListener('fetch', (event) => {
    const { request } = event;

    // Solo request GET
    if (request.method !== 'GET') return;

    // No interceptar streaming
    if (request.url.includes('.mp3') || request.url.includes('stream') || request.url.includes('.m3u8')) {
        return;
    }

    // No interceptar navegacion a otros dominios
    const url = new URL(request.url);
    if (url.origin !== self.location.origin) {
        return;
    }

    event.respondWith(
        caches.match(request)
            .then((cached) => {
                if (cached) {
                    return cached;
                }

                return fetch(request)
                    .then((response) => {
                        // Cachear solo respuestas validas
                        if (response && response.status === 200 && response.type === 'basic') {
                            const responseClone = response.clone();
                            caches.open(CACHE_VERSION)
                                .then((cache) => cache.put(request, responseClone));
                        }
                        return response;
                    })
                    .catch(() => {
                        // Fallback para navegacion offline
                        if (request.mode === 'navigate') {
                            return caches.match('/index.html');
                        }
                    });
            })
    );
});

// Mensajes del cliente
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

// Sincronizacion en background
self.addEventListener('sync', (event) => {
    if (event.tag === 'radio-sync') {
        event.waitUntil(syncRadioData());
    }
});

async function syncRadioData() {
    // Sincronizacion de datos cuando se restaure la conexion
    const clients = await self.clients.matchAll();
    clients.forEach((client) => {
        client.postMessage({ type: 'SYNC_COMPLETE' });
    });
}