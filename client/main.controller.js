(function() {
    'use strict';
    angular.module('HackerNews')
    .controller('mainCtrl', MainCtrl);
    
    MainCtrl.$inject = ['$scope', '$rootScope', '$location'];
    
    function MainCtrl($scope, $rootScope, $location) {
         // Global variables
        $rootScope.baseUrl = 'http://pure-meadow-21519.herokuapp.com/api/v1';
        $rootScope.currentUser = {
          token: 'ya29.CjGzA1FUxS99ybb6FFqijiq6sJ7fXuko6Gxw5rADmYIz2M1vBvAEJaXLmpcVElQHXL_W',
          name: null
        };
        
        $scope.name = null;
        
        $scope.Home = function() {
          $location.path('/');
        };
        
        $scope.Newest = function() {
          $location.path('/newest');
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
        
        $scope.LogIn = function() {
          $location.path('/login');
        };
    }
})();