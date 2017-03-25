(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form')
      .controller('WizardCtrl', WizardCtrl);

  /** @ngInject */
  function WizardCtrl($scope,$state,$http) {
  //  var vm = this;

    $scope.personalInfo = {};
    $scope.travelInfo = {};
    
    var api_url = 'http://ec2-13-55-207-243.ap-southeast-2.compute.amazonaws.com:5000/';

    $http({
      url: api_url+'destinations', 
      method: "GET"
    })
    .then(function(response) {
        $scope.destinations = response.data.results;
        
        console.log($scope.destinations)
        
    });

    
    $http({
      url: api_url+'origins', 
      method: "GET"
    })
    .then(function(response) {
        $scope.origins = response.data.results;
        // console.log($scope.origins)
        
    });

    $scope.dateOptionsStart = {
    showWeeks: false,
    startingDay: 1,
    minDate: new Date()
  };
  $scope.dateOptionsEnd = {
    showWeeks: false,
    startingDay: 1,
    minDate: new Date()
  };

   $scope.$watch('travelInfo.start', function (v) {

    console.log(v)
    $scope.end = v;
    if (v) {
      $scope.travelInfo.end = new Date(v.getTime() + 24 * 60 * 60 * 1000);
    }

    $scope.dateOptionsEnd = {
      showWeeks: false,
      startingDay: 2,
      minDate: $scope.travelInfo.end
    };
  });

  $scope.format = 'dd MMM yyyy';
  $scope.altInputFormats = ['M!/d!/yyyy'];
    // vm.arePersonalInfoPasswordsEqual = function () {
    //   return vm.personalInfo.confirmPassword && vm.personalInfo.password == vm.personalInfo.confirmPassword;
    // };
    // $scope.goBestQuote = function(){
    //     $state.go('bestquote',{origin:$scope.travelInfo.origin,destination:$scope.travelInfo.destination,category:$scope.travelInfo.category});
    // }

    // $scope.goPlan = function(){
    //   console.log('start',$scope.travelInfo.start)
    //   console.log('end',$scope.travelInfo.end)
    // }
    var diffDays = function (firstDate, secondDate) {
      var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
      return diffDays;
    }

    $scope.$watch('travelInfo.end', function (v) {

      // console.log($scope.travelInfo.start);
      // console.log(v);
      $scope.travelInfo.duration = diffDays($scope.travelInfo.start,v);
      // console.log('$scope.travelInfo.duration ',$scope.travelInfo.duration );
    });

  }

})();

