//module
var weatherApp =angular.module('weatherApp', ['ngRoute', 'ngResource']);

//routes
weatherApp.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: './pages/home.htm',
    controller: 'homeController'
  })
  .when('/forecast', {
    templateUrl: './pages/forecast.htm',
    controller: 'forecastController'
  })
  .when('/forecast/:days', {
    templateUrl: './pages/forecast.htm',
    controller: 'forecastController'
  })
});

//services - build a custom service so data can move from home page
//to forecast page  (note: have to add service to controllers too)
weatherApp.service('cityService', function() {
  this.city = "Santa Monica, CA";
})

//controllers
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {

    //set initial scope on the model
    $scope.city = cityService.city;

    //value will change via textbox, so update it in cityService too
    $scope.$watch('city', function() {
      cityService.city = $scope.city;
    })

}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {

    //set initial scope on the model
    $scope.city = cityService.city;

    //checking routeParams - if no days passed, default to 2
    $scope.days = $routeParams.days || 2;

    //go get data from my API
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=" + keys.api, {callback:"JSON_CALLBACK" }, {get: {method: "JSONP"}}) //JSON_CALLBACK and JSONP are so can
    //download the API call (i.e. not a hack attempt)

    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days })

    $scope.convertToFahrenheit = function(degK) {
      return Math.round((1.8 * (degK - 273)) + 32);
    }

    $scope.convertToDate = function(dt) {
      return new Date(dt * 1000); //API gave back ms
    }

}]);