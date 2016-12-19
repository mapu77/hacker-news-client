(function() {
    'use strict';
    angular.module('HackerNews')
    .controller('mainCtrl', MainCtrl);
    
    MainCtrl.$inject = ['$scope', '$http', '$rootScope', '$location'];
    
    function MainCtrl($scope,$http, $rootScope, $location) {
       // Global variables
      $rootScope.baseUrl = 'http://pure-meadow-21519.herokuapp.com/api/v1';
      $rootScope.currentUser = {
        token: 'ya29.CjG4A1S-z5GMsxqUmbkEzcVNVVh7q2nMf1Pd9OTyne6SERQQzz3f2bFexzYg-a2IZdVV',
        name: null,
        id: null
      };
      
      $scope.name = null;
      
      $scope.Home = function() {
        $location.path('/');
      };
      
      $scope.Newest = function() {
        $location.path('/newest');
      };
      
      $scope.Threads = function() {
        $location.path('/threads');
      };
      
      $scope.Ask = function() {
        $location.path('/ask');
      };
      
      $scope.Submit = function() {
        $location.path('/submit');
      };
      
      $scope.Profile = function() {
        $location.path('/profile');
      };
    }
})();