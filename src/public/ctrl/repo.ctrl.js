RepoCtrl.$inject = ['$scope', '$stateParams', 'readme'];
export function RepoCtrl($scope, $stateParams, readme) {
  $scope.name = $stateParams.repo;
  $scope.readme = readme;
}
