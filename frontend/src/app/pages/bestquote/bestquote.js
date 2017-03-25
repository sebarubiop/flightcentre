
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.bestquote')
      .controller('BestQuoteCtrl', BestQuoteCtrl);

  /** @ngInject */
  function BestQuoteCtrl($scope,$stateParams) {
    
    console.log($stateParams)
    
  }
})();