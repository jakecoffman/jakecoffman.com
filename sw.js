importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2209ff09ae7e0e9f7fb5.js",
    "revision": "843fe0d64d077218826a1e3617e2aa64"
  },
  {
    "url": "/_nuxt/44c6d7e6376ce0ab0926.js",
    "revision": "86fad7c293305f624bc49910baef3808"
  },
  {
    "url": "/_nuxt/aa6ccb86d831dabb5c71.js",
    "revision": "9952c62b7af0b82b82e5467ccf369ec4"
  },
  {
    "url": "/_nuxt/b8bc7795444b9b8664a0.js",
    "revision": "1d2eacb1a9149a3744609ff3db9368d1"
  },
  {
    "url": "/_nuxt/c352276222b1633cc9e0.js",
    "revision": "b02f1b5f72906789770313c146c39957"
  },
  {
    "url": "/_nuxt/e94c74adbada5682cd5e.js",
    "revision": "e65ae8a8f63fdc75ae69a6faa866068d"
  }
], {
  "cacheId": "nuxt-website",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
