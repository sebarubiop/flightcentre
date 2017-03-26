
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.bestquote')
      .controller('BestQuoteCtrl', BestQuoteCtrl);

  /** @ngInject */
  function BestQuoteCtrl($scope,$stateParams,$http,baConfig) {
    
    
    console.log($stateParams);
    $scope.request = $stateParams;

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

  //London//////////////////////////////////////////////////////////////////////////////////////////////////////
   $http({
      url: api_url+'flights/'+$scope.request.origin+'/'+$scope.request.destination+'/'+$scope.request.flight, 
      method: "GET"
    })
    .then(function(response) {
        $scope.flightsLondon = response.data.results;
        console.log('flightsLondon',$scope.flightsLondon)
        $scope.flightsLondon.forEach(function(item) {
          item.color = getRandomColor();
        });
    });

    $http({
      url: api_url+'acc/'+$scope.request.destination+'/'+$scope.request.accomm, 
      method: "GET"
    })
    .then(function(response) {
        $scope.accommodationLondon = response.data.results;
        console.log('accommodationLondon',$scope.accommodationLondon)
        $scope.accommodationLondon.forEach(function(item) {
          item.color = getRandomColor();
        });
    });

  var ndays = $scope.request.duration+'.00';
    console.log('ndays',ndays);

    $http({
      url: api_url+'tours/'+$scope.request.destination+'/'+ndays, 
      method: "GET"
    })
    .then(function(response) {
        $scope.toursLondon = response.data.results;
        console.log('toursLondon',$scope.toursLondon)
        $scope.toursLondon.forEach(function(item) {
          item.color = getRandomColor();
        });
    });
    
    //Paris//////////////////////////////////////////////////////////////////////////////////////////////////////
   $http({
      url: api_url+'flights/'+$scope.request.origin+'/Paris/'+$scope.request.flight, 
      method: "GET"
    })
    .then(function(response) {
        $scope.flightsParis = response.data.results;
        console.log('flightsParis',$scope.flightsParis)
        $scope.flightsParis.forEach(function(item) {
          item.color = getRandomColor();
        });
    });

    $http({
      url: api_url+'acc/Paris/'+$scope.request.accomm, 
      method: "GET"
    })
    .then(function(response) {
        $scope.accommodationParis = response.data.results;
        console.log('accommodationParis',$scope.accommodationParis)
        $scope.accommodationParis.forEach(function(item) {
          item.color = getRandomColor();
        });
    });

  var ndays = $scope.request.duration+'.00';
    console.log('ndays',ndays);

    $http({
      url: api_url+'tours/Paris/'+ndays, 
      method: "GET"
    })
    .then(function(response) {
        $scope.toursParis = response.data.results;
        console.log('toursParis',$scope.toursParis)
        $scope.toursParis.forEach(function(item) {
          item.color = getRandomColor();
        });
    });

  //Rome//////////////////////////////////////////////////////////////////////////////////////////////////////
   $http({
      url: api_url+'flights/'+$scope.request.origin+'/Rome/'+$scope.request.flight, 
      method: "GET"
    })
    .then(function(response) {
        $scope.flightsRome = response.data.results;
        console.log('flightsRome',$scope.flightsRome)
        $scope.flightsRome.forEach(function(item) {
          item.color = getRandomColor();
        });
    });

    $http({
      url: api_url+'acc/Rome/'+$scope.request.accomm, 
      method: "GET"
    })
    .then(function(response) {
        $scope.accommodationRome = response.data.results;
        console.log('accommodationRome',$scope.accommodationRome)
        $scope.accommodationRome.forEach(function(item) {
          item.color = getRandomColor();
        });
    });

  var ndays = $scope.request.duration+'.00';
    console.log('ndays',ndays);

    $http({
      url: api_url+'tours/Rome/'+ndays, 
      method: "GET"
    })
    .then(function(response) {
        $scope.toursRome = response.data.results;
        console.log('toursRome',$scope.toursRome)
        $scope.toursRome.forEach(function(item) {
          item.color = getRandomColor();
        });
    });

    //Athens//////////////////////////////////////////////////////////////////////////////////////////////////////
   $http({
      url: api_url+'flights/'+$scope.request.origin+'/Athens/'+$scope.request.flight, 
      method: "GET"
    })
    .then(function(response) {
        $scope.flightsAthens = response.data.results;
        console.log('flightsAthens',$scope.flightsAthens)
        $scope.flightsAthens.forEach(function(item) {
          item.color = getRandomColor();
        });
    });

    $http({
      url: api_url+'acc/Athens/'+$scope.request.accomm, 
      method: "GET"
    })
    .then(function(response) {
        $scope.accommodationAthens = response.data.results;
        console.log('accommodationAthens',$scope.accommodationAthens)
        $scope.accommodationAthens.forEach(function(item) {
          item.color = getRandomColor();
        });
    });

  var ndays = $scope.request.duration+'.00';
    console.log('ndays',ndays);

    $http({
      url: api_url+'tours/Athens/'+ndays, 
      method: "GET"
    })
    .then(function(response) {
        $scope.toursAthens = response.data.results;
        console.log('toursAthens',$scope.toursAthens)
        $scope.toursAthens.forEach(function(item) {
          item.color = getRandomColor();
        });
    });

    //Dublin//////////////////////////////////////////////////////////////////////////////////////////////////////
   $http({
      url: api_url+'flights/'+$scope.request.origin+'/Dublin/'+$scope.request.flight, 
      method: "GET"
    })
    .then(function(response) {
        $scope.flightsDublin = response.data.results;
        console.log('flightsDublin',$scope.flightsDublin)
        $scope.flightsDublin.forEach(function(item) {
          item.color = getRandomColor();
        });
    });

    $http({
      url: api_url+'acc/Dublin/'+$scope.request.accomm, 
      method: "GET"
    })
    .then(function(response) {
        $scope.accommodationDublin = response.data.results;
        console.log('accommodationDublin',$scope.accommodationDublin)
        $scope.accommodationDublin.forEach(function(item) {
          item.color = getRandomColor();
        });
    });

  var ndays = $scope.request.duration+'.00';
    console.log('ndays',ndays);

    $http({
      url: api_url+'tours/Dublin/'+ndays, 
      method: "GET"
    })
    .then(function(response) {
        $scope.toursDublin = response.data.results;
        console.log('toursDublin',$scope.toursDublin)
        $scope.toursDublin.forEach(function(item) {
          item.color = getRandomColor();
        });
    });
  }
})();