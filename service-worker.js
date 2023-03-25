// https://stackoverflow.com/a/46037389
self.addEventListener("fetch", function(event){

});

self.addEventListener('push', function(event) {
  if (event.data) {
    var data = event.data.json();
    var options = {
      body: data.message,
      icon: '/img/logo/logo-64.png'
    };
    event.waitUntil(self.registration.showNotification(data.title, options));
  }
});
