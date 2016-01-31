//directives
weatherApp.directive("weatherReport", function() {
  return {
    restrict: 'E', //HTML element
    templateUrl: './directives/weatherReport.htm',
    replace: true,
    //set up isolated scope
    scope: {
      weatherObj: '=', //object
      convertToStandard: '&', //function
      convertToDate: '&', //function
      dateFormat: "@" //string
    }
  }
});
