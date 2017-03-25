
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.bestquote', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('bestquote', {
          url: '/bestquote/:origin/:destination/:category/:duration',
          templateUrl: 'app/pages/bestquote/bestquote.html',
          title: 'best quote',
          controller: 'BestQuoteCtrl',
          controllerAs: 'bqctrl'
        });
  }

})();