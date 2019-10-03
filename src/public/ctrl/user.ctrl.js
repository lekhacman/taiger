export function UserCtrl($scope) {
  $scope.update = function(user) {
    console.log(user.username);
  };
}

UserCtrl.$inject = ['$scope'];
