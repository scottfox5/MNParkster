var parkApp = angular.module('parkJournalApp', ['ngRoute']);

  parkApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/login', {
      templateUrl: '/public/views/login.html',
      controller: 'AuthController',
      controllerAs: 'auth',
      })
      .when('/journalForm', {
        templateUrl: '/public/views/journalForm.html',
        controller: 'JournalController',
        controllerAs: 'jc',
      })
      .when('/myJournal', {
        templateUrl: '/public/views/myJournal.html',
        controller: 'JournalController',
        controllerAs: 'jc',
      })
      .when('/checklist', {
        templateUrl: '/public/views/checklist.html',
        controller: 'ChecklistController',
        controllerAs: 'cc',
      })
      .when('/myPhotos', {
        templateUrl: '/public/views/myPhotos.html',
        controller: "photoController",
        controllerAs: 'pc'
      })
      .otherwise({
        redirectTo: 'login',
      });
  },


]);
