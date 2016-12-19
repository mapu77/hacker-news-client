(function() {
  'use strict';
  angular.module('HackerNews', ['ngMaterial', 'ngRoute'])
    .config(function($mdThemingProvider, $routeProvider) {
      // Colors configuration
      $mdThemingProvider.theme('hacker')
        .primaryPalette('orange', {
          'default': '800', // by default use shade 400 from the pink palette for primary intentions
          'hue-1': '700', // use shade 100 for the <code>md-hue-1</code> class
          'hue-2': '500' // use shade 600 for the <code>md-hue-2</code> class
        })
        // If you specify less than all of the keys, it will inherit from the
        // default shades
        .accentPalette('brown', {
          'default': 'A200' // use shade 200 for default, and keep all other shades the same
        })
        
        .backgroundPalette('grey', {
          'default': '200'
        });
        
      // Routing configuration
      $routeProvider
        .when('/', {
            templateUrl: 'contributions/contributions.html'
        })
        .when('/newest', {
            templateUrl: 'contributions/newest.html'
        })
        .when('/submit', {
            templateUrl: 'contributions/submit.html'
        })
        .when('/ask', {
            templateUrl: 'contributions/ask.html'
        })
        .when('/contributions/:id', {
            templateUrl: 'contributions/detail.html'
        })
        .otherwise({
            redirectTo: '/'
        });
  });
  
})();
