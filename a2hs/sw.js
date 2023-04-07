// self.addEventListener('install', (e) => {
//   e.waitUntil(
//     caches.open('fox-store').then((cache) => cache.addAll([
//       '/calculator/a2hs/',
//       '/calculator/a2hs/index.html',
//       '/calculator/a2hs/index.js',
//       '/calculator/a2hs/style.css',
//       '/calculator/a2hs/icon/fox.jpg',
//     ])),
//   );
// });

// self.addEventListener('fetch', (e) => {
//   console.log(e.request.url);
//   e.respondWith(
//     caches.match(e.request).then((response) => response || fetch(e.request)),
//   );
// });
