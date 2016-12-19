(function() {
    angular.module('HackerNews')
    .controller("detailCtrl", DetailCtrl);
    
    DetailCtrl.$inject = ['$scope', '$http', '$rootScope','$mdDialog', '$route','$location'];
    
    function DetailCtrl($scope, $http, $rootScope, $mdDialog, $route,$location){
        
        $scope.new_comment = '';
 
        $http.get($rootScope.baseUrl + "/contributions/"+localStorage.getItem("id_contribution"), {headers: {'token': $rootScope.currentUser.token}})
        .then(function(response) {
            $scope.contribution = response.data;   
        });
        
        $http.get($rootScope.baseUrl + "/comments?contribution_id="+localStorage.getItem("id_contribution"), {headers: {'token': $rootScope.currentUser.token}})
        .then(function(response) {
            $scope.comments = response.data;   
        });
        
        /*$http.get($rootScope.baseUrl + "/votes?type=comments", {headers: {'token': $rootScope.currentUser.token}})
        .then(function(response) {
            $scope.votes = response.data;   
        });*/
        
        $scope.showPrompt = function(ev, id_comment) {
            var confirm = $mdDialog.prompt()
              .title('Add a reply')
              .initialValue('')
              .targetEvent(ev)
              .ok('Reply')
              .cancel('Cancel');
        
            $mdDialog.show(confirm).then(function(result) {
                if(result==null){
                    alert("Content is empty");
                }
                else{
                    var body = JSON.stringify({
            			"content": result
        		    });
                    $http.post($rootScope.baseUrl + "/replies?user_id=4&comment_id="+id_comment,body, {headers: {'token': $rootScope.currentUser.token}})
                    .then(function(response) {
                        
                    });
                }
            }, function() {});
        };
        
        $scope.isUrl = function(text) {
            var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
            return regexp.test(text);
        };
        
        $scope.ShowComment = function(id){
            localStorage.setItem("id_comment", id);
            $location.path('/comments/'+id);
        };
        
        $scope.addComment = function(id_contribution) {
            if($scope.new_comment==0){
                alert("Content is empty");
            }
            else {
                var body = JSON.stringify({
                    content: $scope.new_comment
                });
                $http.post($rootScope.baseUrl + "/comments?user_id=4&contribution_id="+id_contribution, body, {headers: {'token': $rootScope.currentUser.token}})
                .then(function(response) {
                    $route.reload();
                });
            }
        };

        function DialogController($scope, $mdDialog) {
            $scope.hide = function() {
                console.log("Hola2");
                $mdDialog.hide();
            };

            $scope.cancel = function() {
                $mdDialog.cancel();
            };

            $scope.answer = function(answer) {
                console.log("Hola2");
                $mdDialog.hide(answer);
            };
        }
    }
})();