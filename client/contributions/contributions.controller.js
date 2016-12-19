(function() {
    angular.module('HackerNews')
    .controller("contributionCtrl", ContributionCtrl);
    
    ContributionCtrl.$inject = ['$scope', '$http', '$rootScope','$mdDialog', '$location'];
    
    function ContributionCtrl($scope, $http, $rootScope, $mdDialog, $location) {
        
        console.log("Arrivo");
        
        $http.get($rootScope.baseUrl + "/contributions", {headers: {'token': $rootScope.currentUser.token}})
        .then(function(response) {
            $scope.contributions = response.data;   
        });
        
        //$http.get($rootScope.baseUrl + "/votes?type=contributions", {headers: {'token': $rootScope.currentUser.token}})
        //.then(function(response) {
        //     $scope.votes = response.data;   
        //});
        
        $scope.showPrompt = function(ev, id_contribution) {
            var confirm = $mdDialog.prompt()
              .title('Add a comment')
              .initialValue('')
              .targetEvent(ev)
              .theme('hacker')
              .ok('Comment')
              .cancel('Cancel');
        
            $mdDialog.show(confirm).then(function(result) {
                console.log(result);
                if(result==null){
                    alert("Content is empty");
                }
                else{
                    var body = JSON.stringify({
            			"content": result
        		    });
                    $http.post($rootScope.baseUrl + "/comments?user_id=4&contribution_id="+id_contribution,body, {headers: {'token': $rootScope.currentUser.token}})
                    .then(function(response) {
                        localStorage.setItem("id_contribution", id_contribution);
                        $location.path('/contributions/'+ id_contribution);
                    });
                }
            }, function() {});
        };
        
        $scope.ShowContribution = function(id){
            localStorage.setItem("id_contribution", id);
            $location.path('/contributions/'+id);
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