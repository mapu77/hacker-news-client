(function() {
    angular.module('HackerNews')
    .controller("askCtrl", AskCtrl);
    
    AskCtrl.$inject = ['$scope', '$http', '$rootScope','$mdDialog'];
    
    function AskCtrl($scope, $http, $rootScope, $mdDialog) {
        $http.get($rootScope.baseUrl + "/contributions?type=ask", {headers: {'token': $rootScope.currentUser.token}})
        .then(function(response) {
            $scope.contributions = response.data;
        });
        
        $scope.showPrompt = function(ev) {
            var confirm = $mdDialog.prompt()
              .title('Add a comment')
              .initialValue('')
              .targetEvent(ev)
              .ok('Comment')
              .cancel('Cancel');
        
            $mdDialog.show(confirm).then(function(result) {
                //Send peticio comment
            }, function() {});
        };

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