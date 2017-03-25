
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.bestquote')
      .controller('BestQuoteCtrl', BestQuoteCtrl);

  /** @ngInject */
  function BestQuoteCtrl($scope,$stateParams,$http) {
    
    console.log($stateParams);
    var request = $stateParams;

  var api_url = 'http://ec2-13-55-207-243.ap-southeast-2.compute.amazonaws.com:5000/';

   $http({
    url: api_url+"flights/Sydney/London/Economy", 
    method: "GET"
 })
  .then(function(response) {
      $scope.quotes = response.data;
      console.log($scope.quotes)
  });
 
  }
})();