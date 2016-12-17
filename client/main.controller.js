(function() {
    angular.module('HackerNews')
    .controller('mainCtrl', MainCtrl);
    
    MainCtrl.$inject = ['$scope', '$rootScope'];
    
    function MainCtrl($scope, $rootScope) {
         // Global variables
        $rootScope.baseUrl = 'http://pure-meadow-21519.herokuapp.com/api/v1';
        $rootScope.currentUser = {
          token: 'ya29.CjGzA1FUxS99ybb6FFqijiq6sJ7fXuko6Gxw5rADmYIz2M1vBvAEJaXLmpcVElQHXL_W',
          name: null
        };
        
        $scope.name = null;
    }
})();