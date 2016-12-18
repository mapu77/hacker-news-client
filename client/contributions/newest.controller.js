(function() {
    angular.module('HackerNews')
    .controller("newestCtrl", NewestCtrl);
    
    NewestCtrl.$inject = ['$scope', '$http', '$rootScope','$mdDialog'];
    
    function NewestCtrl($scope, $http, $rootScope, $mdDialog) {
        $http.get($rootScope.baseUrl + "/contributions?type=url", {headers: {'token': $rootScope.currentUser.token}})
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