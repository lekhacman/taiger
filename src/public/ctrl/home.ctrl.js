export function HomeCtrl($scope, $state) {
  $scope.submit = $state.go.bind($state, 'user');
}

HomeCtrl.$inject = ['$scope', '$state'];
