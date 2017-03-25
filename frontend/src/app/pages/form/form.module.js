/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form', ['ui.select', 'ngSanitize'])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        
        .state('form',
        {
          url: '/form',
          templateUrl: 'app/pages/form/wizard/wizard.html',
          controller: 'WizardCtrl',
          controllerAs: 'vm',
          title: 'Quote',
          sidebarMeta: {
            order: 0,
          },
        });
  }
})();
