var parkApp = angular.module('parkJournalApp', ['ngRoute', 'ngFileUpload']);

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
        controller: "PhotoController",
        controllerAs: 'pc'
      })
      .when('/fullSize', {
        templateUrl: '/public/views/fullSize.html',
        controller: "PhotoController",
        controllerAs: 'pc'
      })
      .when('/tripPlanner', {
        templateUrl: '/public/views/tripPlanner.html',
        controller: "WeatherController",
        controllerAs: 'wc'
      })
      .otherwise({
        redirectTo: 'login',
      });
  },


]);
