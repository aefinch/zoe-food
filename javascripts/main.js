var app = angular.module("FoodApp", []);

app.controller("ListCtrl", ($scope) => {
	$scope.foodList = [{food: "!cake"}, {food: "ice cream"}, {food: "pie"}, {food: "pizza"}];
	$scope.showListView = true;
	$scope.showFoods = () => {
		$scope.showListView = false;
	};
});
