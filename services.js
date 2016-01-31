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
