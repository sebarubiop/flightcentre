
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.bestquote', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('bestquote', {
          url: '/bestquote/:origin/:destination/:category',
          templateUrl: 'app/pages/bestquote/bestquote.html',
          title: 'best quote',
          controller: 'BestQuoteCtrl',
          controllerAs: 'bqctrl',
        });
  }

})();