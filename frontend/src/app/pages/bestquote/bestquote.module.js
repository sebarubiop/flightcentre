
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.bestquote', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('bestquote', {
          url: '/bestquote',
          templateUrl: 'app/pages/bestquote/bestquote.html',
          title: 'best quote',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 1000,
          },
          
        });
  }

})();