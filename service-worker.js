self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('static-cache-v1')
            .then(function(cache) {
                return cache.addAll([
                    '.',
                    'index.html',
                    'assets/js/app.js',
                    'https://code.jquery.com/jquery-3.3.1.slim.min.js',
                    'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js',
                    'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
                    'https://cdn.jsdelivr.net/npm/vue/dist/vue.js',
                    'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
                ]);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request)
        .then(function(response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});