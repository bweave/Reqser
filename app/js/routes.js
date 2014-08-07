"use strict";

angular.module('myApp.routes', ['ngRoute'])

   // configure views; the authRequired parameter is used for specifying pages
   // which should only be available while logged in
   .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/home', {
         templateUrl: 'partials/home.html',
         controller: 'HomeCtrl'
      });

      $routeProvider.when('/chat', {
         authRequired: true, // must authenticate before viewing this page
         templateUrl: 'partials/chat.html',
         controller: 'ChatCtrl'
      });

      $routeProvider.when('/reqs', {
         authRequired: true, // must authenticate before viewing this page
         templateUrl: 'partials/reqs.html',
         controller: 'ReqsCtrl'
      });

      $routeProvider.when('/account', {
         authRequired: true, // must authenticate before viewing this page
         templateUrl: 'partials/account.html',
         controller: 'AccountCtrl'
      });

      $routeProvider.when('/login', {
         templateUrl: 'partials/login.html',
         controller: 'LoginCtrl'
      });

      $routeProvider.when('/logout', {
         template: '', // work-around for "headless/viewless" controller
         controller: 'LogoutCtrl'
      });

      $routeProvider.otherwise({redirectTo: '/home'});
   }]);