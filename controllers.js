//controllers
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {

    //set initial scope on the model
    $scope.city = cityService.city;

    //value will change via textbox, so update it in cityService too
    $scope.$watch('city', function() {
      cityService.city = $scope.city;
    });

    $scope.submit = function() {
      //injected $locatiion
      $location.path("/forecast")
    };

}]);

weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService) {

  //set initial scope on the model
  $scope.city = cityService.city;

  //checking routeParams - if no days passed, default to 2
  $scope.days = $routeParams.days || '1'; //make 1 a string so ng-class in forecast works

  $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);

  $scope.convertToFahrenheit = function(degK) {
    return Math.round((1.8 * (degK - 273)) + 32);
  };

  $scope.convertToDate = function(dt) {
    return new Date(dt * 1000); //API gave back ms so * 1000
  };

}]);
