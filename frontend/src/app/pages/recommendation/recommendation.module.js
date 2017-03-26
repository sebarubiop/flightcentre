
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.recommendation', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('recommendation', {
          url: '/recommendation/:origin',
          templateUrl: 'app/pages/recommendation/recommendation.html',
          title: 'Recommendations',
          controller: 'RecommendationCtrl',
          controllerAs: 'rctrl'
        });
  }

})();