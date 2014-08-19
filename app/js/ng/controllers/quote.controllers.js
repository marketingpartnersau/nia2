angular.module('health.controllers.quote', [])
	.controller('QuoteFormController', ['$scope', '$modal', '$state', '$stateParams', 'QuoteData', 'GeoCode',
		function($scope, $modal, $state, $stateParams, QuoteData, GeoCode){

			$scope.options = QuoteData.options;
			$scope.geocode = GeoCode;
			$scope.formData = {
				selections: {}
			};

			$scope.uiState = {
				cardFlipped: false
			};


			$scope.$on('$stateChangeStart', 
			function(event, toState, toParams, fromState, fromParams){
				_.each(fromParams, function(val, key){
					toParams[key] = val;
				});

				_.each(toParams, function(val, key){
					$scope.formData.selections[key] = val;
				});
			});

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


	.controller('QuoteController', ['$scope', '$timeout', '$state', '$stateParams', 'Products',
		function($scope, $timeout, $state, $stateParams, Products){

			$scope.products = Products.products;
			$scope.formData.selections = $stateParams;

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