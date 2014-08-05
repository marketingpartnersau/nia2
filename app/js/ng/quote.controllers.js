angular.module('health.controllers.quote', [])
	.controller('QuoteFormController', ['$scope', '$modal', 'QuoteData', 'GeoCode', 'Products',
		function($scope, $modal, QuoteData, GeoCode, Products){

			$scope.options = QuoteData.options;
			$scope.geocode = GeoCode;
			$scope.formData = {
				selections: {}
			};

			$scope.products = Products.products;

			$scope.uiState = {
				cardFlipped: false
			};

			window.formdata = $scope.formData;

			$scope.getLocation = function(){
				if(navigator.geolocation){
					navigator.geolocation.getCurrentPosition($scope.savePosition);
				}
			};

			$scope.savePosition = function(position){
				$scope.formData.coords = position.coords;
				$scope.formData.geoCode = GeoCode.reverse($scope.formData.coords.lat, $scope.formData.coords.lng);
				console.log($scope.formData);
			};

			$scope.getQuote = function(){
				// on submit
			};
		}
	])

	.controller('QuoteController', ['$scope', '$timeout', '$state', '$stateParams',
		function($scope, $timeout, $state, $stateParams){
			$scope.params = {
				frequency: 'year',
				inclusion: 'hospitals'
			};

			console.log($stateParams);

			$scope.showText = {
				hidden: false
			};

			$timeout(function(){
				$scope.showText.hidden = true;
			}, 5000);
		}
	]);