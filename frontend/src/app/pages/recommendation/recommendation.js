
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

//     $scope.editableTableData = [
//   {
//     "id": 1,
//     "destination": "Nadi",
//     "purchases": 50412,
//     "price": 4740.8894044962,
//     "detail": "https://plannertrip.com/itinerary-map/London/58d6fd982d197a00056f027d"
//   },
//   {
//     "id": 2,
//     "destination": "London",
//     "purchases": 44417,
//     "price": 6172.81825357796,
//     "detail": "https://plannertrip.com/itinerary-map/London/58d6fd982d197a00056f027d"
//   },
//   {
//     "id": 3,
//     "destination": "Honolulu",
//     "purchases": 38519,
//     "price": 7040.66003216674,
//     "detail": "https://plannertrip.com/itinerary-map/London/58d6fd982d197a00056f027d"
//   },
//   {
//     "id": 4,
//     "destination": "Denpasar",
//     "purchases": 35277,
//     "price": 2965.10133415654,
//     "detail": "https://plannertrip.com/itinerary-map/London/58d6fd982d197a00056f027d"
//   },
//   {
//     "id": 5,
//     "destination": "Phuket",
//     "purchases": 30309,
//     "price": 4210.68535247065,
//     "detail": "https://plannertrip.com/itinerary-map/London/58d6fd982d197a00056f027d"
//   },
//   {
//     "id": 6,
//     "destination": "Gold Coast",
//     "purchases": 29217,
//     "price": 1269.53745476478,
//     "detail": "https://plannertrip.com/itinerary-map/London/58d6fd982d197a00056f027d"
//   },
//   {
//     "id": 7,
//     "destination": "Melbourne",
//     "purchases": 29068,
//     "price": 933.452707090922,
//     "detail": "https://plannertrip.com/itinerary-map/London/58d6fd982d197a00056f027d"
//   },
//   {
//     "id": 8,
//     "destination": "Auckland",
//     "purchases": 28387,
//     "price": 2796.28188539161,
//     "detail": "https://plannertrip.com/itinerary-map/London/58d6fd982d197a00056f027d"
//   },
//   {
//     "id": 9,
//     "destination": "Los Angeles",
//     "purchases": 24940,
//     "price": 6298.03420600858,
//     "detail": "https://plannertrip.com/itinerary-map/London/58d6fd982d197a00056f027d"
//   },
//   {
//     "id": 10,
//     "destination": "London",
//     "purchases": 17161,
//     "price": 7817.39640596469,
//     "detail": "https://plannertrip.com/itinerary-map/London/58d6fd982d197a00056f027d"
//   },
//   {
//     "id": 11,
//     "destination": "Noumea",
//     "purchases": 16795,
//     "price": 4931.99901101206,
//     "detail": "https://plannertrip.com/itinerary-map/London/58d6fd982d197a00056f027d"
//   },
//   {
//     "id": 12,
//     "destination": "Cairns",
//     "purchases": 16144,
//     "price": 2349.31183165694,
//     "detail": "https://plannertrip.com/itinerary-map/London/58d6fd982d197a00056f027d"
//   },
//   {
//     "id": 13,
//     "destination": "Brisbane",
//     "purchases": 16089,
//     "price": 830.505379882674,
//     "detail": "https://plannertrip.com/itinerary-map/London/58d6fd982d197a00056f027d"
//   },
//   {
//     "id": 14,
//     "destination": "Singapore",
//     "purchases": 13388,
//     "price": 4486.57644598339,
//     "detail": "https://plannertrip.com/itinerary-map/London/58d6fd982d197a00056f027d"
//   },
//   {
//     "id": 15,
//     "destination": "Bangkok",
//     "purchases": 12973,
//     "price": 2428.27057477872,
//     "detail": "https://plannertrip.com/itinerary-map/London/58d6fd982d197a00056f027d"
//   },
//   {
//     "id": 16,
//     "destination": "Perth",
//     "purchases": 12927,
//     "price": 2014.78105686216,
//     "detail": "https://plannertrip.com/itinerary-map/London/58d6fd982d197a00056f027d"
//   },
//   {
//     "id": 17,
//     "destination": "Paris",
//     "purchases": 11362,
//     "price": 6581.17768526226,
//     "detail": "https://plannertrip.com/itinerary-map/London/58d6fd982d197a00056f027d"
//   },
//   {
//     "id": 18,
//     "destination": "Rome",
//     "purchases": 10550,
//     "price": 7285.10794222151,
//     "detail": "https://plannertrip.com/itinerary-map/London/58d6fd982d197a00056f027d"
//   },
//   {
//     "id": 19,
//     "destination": "Vancouver",
//     "purchases": 10529,
//     "price": 11272.2979196556,
//     "detail": "https://plannertrip.com/itinerary-map/London/58d6fd982d197a00056f027d"
//   },
//   {
//     "id": 20,
//     "destination": "Adelaide",
//     "purchases": 9943,
//     "price": 1135.70763722554,
//     "detail": "https://plannertrip.com/itinerary-map/London/58d6fd982d197a00056f027d"
//   }
// ];
  }
})();