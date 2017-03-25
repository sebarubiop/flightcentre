(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form')
      .controller('WizardCtrl', WizardCtrl);

  /** @ngInject */
  function WizardCtrl($scope,$state) {
  //  var vm = this;

    $scope.personalInfo = {};
    $scope.travelInfo = {};

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
    $scope.goBestQuote = function(){
        $state.go('bestquote');
    }

    $scope.goPlan = function(){
      console.log('start',$scope.travelInfo.start)
      console.log('end',$scope.travelInfo.end)
    }
  }

})();

