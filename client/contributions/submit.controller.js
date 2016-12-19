(function() {
    angular.module('HackerNews')
    .controller("submitCtrl", SubmitCtrl);
    
    SubmitCtrl.$inject = ['$scope', '$http', '$rootScope','$mdDialog'];
    
    function SubmitCtrl($scope, $http, $rootScope, $mdDialog) {
        
        
        
        function DialogController($scope, $mdDialog) {
            $scope.hide = function() {
                $mdDialog.hide();
            };

            $scope.cancel = function() {
                $mdDialog.cancel();
            };

            $scope.answer = function(answer) {
                $mdDialog.hide(answer);
            };
        }
    }
})();