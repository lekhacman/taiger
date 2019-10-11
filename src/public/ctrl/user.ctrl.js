UserCtrl.$inject = ['$scope', '$stateParams', 'repos'];
export function UserCtrl($scope, $stateParams, repos) {
  $scope.repos = repos;
  $scope.username = $stateParams.username;
}
