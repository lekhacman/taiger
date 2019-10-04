UserCtrl.$inject = ['$scope', '$stateParams', 'repos'];
export function UserCtrl($scope, $stateParams, repos) {
  $scope.repos = repos;
  $scope.username = $stateParams.username;
  $scope.update = function(user) {
    console.log(user.username);
  };
}
