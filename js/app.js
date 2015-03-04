angular.module('GroceryApp', [])
  .controller('GroceryController', ['$scope', function($scope) {
    $scope.items = [
      {text:'Eggs', done:false},
      {text:'Bacon', done:false},
      {text:'Pancakes', done:false},
      {text:'Syrup', done:false},
      {text:'Orange Juice', done:false}];
 
    $scope.addItem = function() {
      $scope.items.push({text:$scope.itemText, done:false});
      $scope.itemText = '';
    };
 
    $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.items, function(item) {
        count += item.done ? 0 : 1;
      });
      return count;
    };
 
    $scope.delete = function() {
      var oldItems = $scope.items;
      $scope.items = [];
      angular.forEach(oldItems, function(item) {
        if (!item.done) $scope.items.push(item);
      });
    };
  }]);