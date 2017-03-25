
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.bestquote')
      .controller('BestQuoteCtrl', BestQuoteCtrl);

  /** @ngInject */
  function BestQuoteCtrl($scope,$stateParams,$http,baConfig) {
    
    console.log($stateParams);
    var request = $stateParams;

    $scope.transparent = baConfig.theme.blur;
    var dashboardColors = baConfig.colors.dashboard;
    var colors = [];
    for (var key in dashboardColors) {
      colors.push(dashboardColors[key]);
    }

    function getRandomColor() {
      var i = Math.floor(Math.random() * (colors.length - 1));
      return colors[i];
    }
    

  var api_url = 'http://ec2-13-55-207-243.ap-southeast-2.compute.amazonaws.com:5000/';

   $http({
      url: api_url+'flights/'+request.origin+'/'+request.destination+'/'+request.category, 
      method: "GET"
    })
    .then(function(response) {
        $scope.flights = response.data.results;
        console.log($scope.flights)
        $scope.flights.forEach(function(item) {
          item.color = getRandomColor();
        });
    });

    $http({
      url: api_url+'acc/'+request.destination+'/'+request.rating, 
      method: "GET"
    })
    .then(function(response) {
        $scope.accommodation = response.data.results;
        console.log($scope.accommodation)
        $scope.accommodation.forEach(function(item) {
          item.color = getRandomColor();
        });
    });

    $http({
      url: api_url+'tours/'+request.destination+'/'+request.ndays, 
      method: "GET"
    })
    .then(function(response) {
        $scope.tours = response.data.results;
        console.log($scope.tours)
        $scope.tours.forEach(function(item) {
          item.color = getRandomColor();
        });
    });
 
  }
})();