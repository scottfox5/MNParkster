var googleAuthApp = angular.module('parkJournalApp', ['ngRoute']);

  googleAuthApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
      .when('/journal', {
        templateUrl: '/public/views/journal.html',
        controller: 'JournalController',
        controllerAs: 'jc',
      })
      .when('/login', {
        templateUrl: '/public/views/login.html',
        controller: 'AuthController',
        controllerAs: 'auth',
      })
      .otherwise({
        redirectTo: 'login',
      });
  },


]);
