//services - build a custom service so data can move from home page
//to forecast page  (note: have to add service to controllers too)
weatherApp.service('cityService', function() {
  this.city = "Santa Monica, CA";
});

// weatherApp.service('weatherService', function() {
// need to inject $resource service into our custom service
weatherApp.service('weatherService', ['$resource', function($resource) {
  //add a method
  this.GetWeather = function(city, days) {
    //go get data from my API
    //
    // $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=" + keys.api, {callback:"JSON_CALLBACK" }, {get: {method: "JSONP"}});
    //JSON_CALLBACK and JSONP are so can
    //download the API call (i.e. not a hack attempt)
    //
    var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=" + keys.api, {callback:"JSON_CALLBACK" }, {get: {method: "JSONP"}});

    // $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });
    return weatherResult = weatherAPI.get({ q: city, cnt: days });
  };
}]);
