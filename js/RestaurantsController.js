restaurantRoster.controller("RestaurantsCtrl", function RestaurantsCtrl($scope) {
  $scope.restaurants = [];
  $scope.addRestaurant = function() {
    $scope.restaurants.push({ name: $scope.restaurantName,
      typeOfFood: $scope.restaurantTypeOfFood,
      location: $scope.restaurantLocation,
      priceRange: $scope.restaurantPriceRange,
      rating: $scope.restaurantRating });
    $scope.restaurantName = null;
    $scope.restaurantTypeOfFood = null;
    $scope.restaurantLocation = null;
    $scope.restaurantPriceRange = null;
    $scope.restaurantRating = null;
  };
});
