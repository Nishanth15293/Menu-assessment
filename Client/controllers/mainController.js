/**
 * Created by Nishanth on 2/3/2016.
 */
angular.module('app')

    .controller('mainController',mainController);

mainController.$inject=[
    '$scope',
    '$http'
];

function mainController($scope,$http){
    console.log("in main controller");
    //$scope.name="Nishanth";


    (function(){
        $http.get('/data').then(function(res){
            console.log("data received as ");
          //  console.log(res.data.categories);
            $scope.menu = res.data;
            $scope.column1 = [];
            ($scope.column1).push($scope.menu[0]);
            ($scope.column1).push($scope.menu[1]);
            $scope.column2 = [];
            ($scope.column2).push($scope.menu[2]);
            ($scope.column2).push($scope.menu[3]);
            ($scope.column2).push($scope.menu[4]);
            $scope.column3 = [];
            ($scope.column3).push($scope.menu[5]);
            ($scope.column3).push($scope.menu[6]);


        });

    })();


}
