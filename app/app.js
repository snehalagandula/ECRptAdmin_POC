
var app = angular.module('app', ['ngAnimate', 'ngTouch', 'ui.grid', 'ui.grid.selection', 'ui.grid.pagination', 'ui.grid.moveColumns', 'ui.grid.resizeColumns']);

app.controller('MainCtrl', ['$scope', '$http', 'uiGridConstants', function ($scope, $http, uiGridConstants) {

  $scope.gridOptions1 = {
    enableSorting: true,
    paginationPageSizes: [25, 50, 75],
    paginationPageSize: 25,

    columnDefs: [
      { field: 'name' },
      { field: 'gender' },
      { field: 'company'}
    ]

  };

  $scope.removeData = function() {
    console.log(gridOptions.api.getSelectedRows());

  };
  $http.get('https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/100.json')
      .success(function(data) {
        $scope.gridOptions1.data = data;

      });
}]);