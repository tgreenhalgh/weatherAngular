//services - build a custom service so data can move from home page
//to forecast page  (note: have to add service to controllers too)
weatherApp.service('cityService', function() {
  this.city = "Santa Monica, CA";
});
