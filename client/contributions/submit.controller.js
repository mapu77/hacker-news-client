(function() {
    angular.module('HackerNews')
    .controller("submitCtrl", SubmitCtrl);
    
    SubmitCtrl.$inject = ['$scope', '$http', '$rootScope','$mdDialog', '$location'];
    
    function SubmitCtrl($scope, $http, $rootScope, $mdDialog, $location) {
        
        $scope.new_title_contribution = null;
        $scope.new_url_contribution = null;
        $scope.new_text_contribution = null;
        
        $scope.addContribution = function(id_user) {
            
            var title = $scope.new_title_contribution;
            var url = $scope.new_url_contribution;
            var text = $scope.new_text_contribution;
            
            if (title==null || title=='') {
                dialogGeneral('Title must not be blank.');
            } else if ((url==null || url=='') && (text==null || text=='')) {
                dialogGeneral('Bad request. Url or text must be set.');
            } else if ((url!=null) && (text!=null)) {
                dialogGeneral('Conflict on creating contribution. It cannot have text and url.');
            } else {
                var body = JSON.stringify({
                        title: $scope.new_title_contribution,
                        url: $scope.new_url_contribution,
                        text: $scope.new_text_contribution,
                        user_id: id_user
                    });
                $http.post($rootScope.baseUrl + "/contributions", body, {headers: {'token': $rootScope.currentUser.token}})
                .then(function(response){
                    $location.path('/');
                });
            }
            
            };
        
        function dialogGeneral(msg) {
            var confirm = $mdDialog.alert()
                .title('Error!')
                .textContent(msg)
                .ok('OK');
                
                $mdDialog.show(confirm).then(function(result) {
                    $scope.new_url_contribution = null;
                    $scope.new_text_contribution = null;
                }, function() {});
        }
        
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