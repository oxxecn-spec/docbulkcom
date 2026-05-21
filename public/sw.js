/**
 * Service Worker for docbulk
 */

const CACHE_NAME = 'docbulk-cache-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Simple pass-through for now to avoid errors
    // In a real PWA, caching logic would go here
});

