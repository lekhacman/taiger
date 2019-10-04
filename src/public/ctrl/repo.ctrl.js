RepoCtrl.$inject = ['$scope', '$stateParams'];
export function RepoCtrl($scope, $stateParams) {
  $scope.name = $stateParams.repo;
}
