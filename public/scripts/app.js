var parkApp = angular.module('parkJournalApp', ['ngRoute']);

  parkApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
      .when('/login', {
      templateUrl: '/public/views/login.html',
      controller: 'AuthController',
      controllerAs: 'auth',
      })
      .when('/journal', {
        templateUrl: '/public/views/journal.html',
        controller: 'JournalController',
        controllerAs: 'jc',
      })
      .when('/checklist', {
        templateUrl: '/public/views/checklist.html',
        controller: 'ChecklistController',
        controllerAs: 'cc',
      })
      .otherwise({
        redirectTo: 'login',
      });
  },


]);
