(function() {
    angular.module('HackerNews')
    .controller("contributionCtrl", ContributionCtrl);
    
    ContributionCtrl.$inject = ['$scope', '$http', '$rootScope','$mdDialog'];
    
    function ContributionCtrl($scope, $http, $rootScope, $mdDialog) {
        $http.get($rootScope.baseUrl + "/contributions", {headers: {'token': $rootScope.currentUser.token}})
        .then(function(response) {
            console.log(response.data);
            $scope.contributions = response.data;
        });
        
        $scope.showPrompt = function(ev) {
            // Appending dialog to document.body to cover sidenav in docs app
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