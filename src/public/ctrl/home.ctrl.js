HomeCtrl.$inject = ['$scope', '$state'];
export function HomeCtrl($scope, $state) {
  $scope.submit = $state.go.bind($state, 'user');
}
