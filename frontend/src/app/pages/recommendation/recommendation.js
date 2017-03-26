
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.recommendation')
      .controller('RecommendationCtrl', RecommendationCtrl);

  /** @ngInject */
  function RecommendationCtrl($scope,$stateParams,$http) {
    
    if(!$stateParams){
        $stateParams = {origin:"Sydney"};
    }
    console.log($stateParams);
    $scope.request = $stateParams;
    
    var api_url = 'http://ec2-13-55-207-243.ap-southeast-2.compute.amazonaws.com:5000/';

    $http({
      url: api_url+'recommended_destinations/'+$scope.request.origin, 
      method: "GET"
    })
    .then(function(response) {
        $scope.editableTableData = [];
        
        var count = 0;
        response.data.results.forEach(function(item){
            var destinations = {};
            destinations.id = count+1;
            destinations.destination = item[3];
            destinations.purchases = item[4];
            destinations.price = item[5];
            destinations.detail = 'https://plannertrip.com/itinerary-map/London/58d6fd982d197a00056f027d';
            count += 1;
            
            $scope.editableTableData.push(destinations);
        }); 
        console.log($scope.editableTableData);
    });

  }
})();