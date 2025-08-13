const CACHE_NAME = 'chore-manager-v1';
const urlsToCache = [
    '/chores',
    '/chores/',
    '/',
    '/static/js/bundle.js',
    '/static/css/main.css',
    '/chore-manifest.json',
    '/chore-icon-192.png',
    '/chore-icon-512.png'
];

// Install event
self.addEventListener('install', event => {
    console.log('Chore Manager Service Worker installing...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Chore Manager cache opened');
                return cache.addAll(urlsToCache.map(url => {
                    return new Request(url, { mode: 'no-cors' });
                })).catch(error => {
                    console.log('Some resources failed to cache:', error);
                    // Cache essential resources individually
                    return Promise.all([
                        cache.add('/chores').catch(() => console.log('Failed to cache /chores')),
                        cache.add('/').catch(() => console.log('Failed to cache /'))
                    ]);
                });
            })
    );
    self.skipWaiting();
});

// Fetch event
self.addEventListener('fetch', event => {
    // Only handle requests within our scope
    if (!event.request.url.includes('/chores') && !event.request.url.includes('static')) {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached version or fetch from network
                if (response) {
                    return response;
                }
                
                return fetch(event.request).then(response => {
                    // Don't cache non-successful responses
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    // Clone the response
                    const responseToCache = response.clone();

                    caches.open(CACHE_NAME)
                        .then(cache => {
                            cache.put(event.request, responseToCache);
                        });

                    return response;
                });
            }).catch(() => {
                // If both cache and network fail, return offline page for navigation requests
                if (event.request.mode === 'navigate') {
                    return caches.match('/chores');
                }
            })
    );
});

// Activate event
self.addEventListener('activate', event => {
    console.log('Chore Manager Service Worker activating...');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME && cacheName.includes('chore-manager')) {
                        console.log('Deleting old chore cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});