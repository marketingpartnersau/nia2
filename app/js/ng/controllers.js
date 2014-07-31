'use strict';

angular.module('health.controllers', [])

	.controller('MainController', ['$scope', '$rootScope',
		function($scope, $rootScope){

			window.scope = $scope;

			$scope.uiStates = {
				bottomDrawerOpen: false,
				topDrawerOpen: false,
			};

			// WHY DID THIS STOP WORKING
			$scope.$on('$stateChangeStart',
				function(event, toState){
					if(toState.name === 'home'){
						$scope.overflowY = {overflow: 'hidden'};} 
					else {
						$scope.overflowY = {overflow: 'scroll'};}
				}
			);

			window.overflowY = $scope.overflowY;
		}
	])

	.controller('TopBarController', ['$scope', '$modal',
		function($scope, $modal){
			$scope.openSupport = function(){
				$modal.open({
					templateUrl: 'partials/modals/support.html',
					controller: 'SupportPopupController'
				}).result.then(function(){

				});
			};
		}
	])

	.controller('MenuBarController', ['$scope', 'SiteData',
		function($scope, SiteData){

			$scope.menuItems = SiteData.menuItems;
			$scope.moreItems = SiteData.moreMenuItems;


			$scope.toggleDrawer = function(){
				if(!$scope.uiStates.bottomDrawerOpen){
					$scope.uiStates.bottomDrawerOpen = true;
				} else { 
					$scope.uiStates.bottomDrawerOpen = false;
				}
			};
		}
	])

	.controller('HomeController', ['$scope', '$modal', 'HomeData', 'Testimonials', 'Proof',
		function($scope, $modal, HomeData, Testimonials, Proof){
			$scope.testimonials = Testimonials.testimonials;
			$scope.proof = Proof;
			$scope.data = HomeData;
			$scope.noOverflow = {};

			$scope.openTestimonials = function(){
				$modal.open({
					templateUrl: 'partials/modals/testimonials.html',
					resolve: {
						testimonials: function(){
							return Testimonials.testimonials;	
						}
					},
					controller: function($scope, testimonials){
						$scope.testimonials = testimonials;
					}
				});
			};

			$scope.openProofs = function(){
				$modal.open({
					templateUrl: 'partials/modals/proof.html',
					resolve: {
						Proof: function(){
							return Proof;
						}
					},
					controller: function($scope, Proof){
						$scope.awards = Proof.awards;
						$scope.press = Proof.press;
					}
				});
			};
		}
	])

	.controller('QuoteFormController', ['$scope', 'QuoteData', 'GeoCode', 'Products',
		function($scope, QuoteData2, GeoCode, Products){

			$scope.options = QuoteData2.options;
			$scope.geocode = GeoCode;
			$scope.formData = {
				selections: {}
			};

			$scope.products = Products.products;

			$scope.uiState = {
				cardFlipped: false
			}

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

			$scope.flipCard = function(){
				// (#quote-form)

			}
		}
	])

	// THIS ONE IS SORTA REDUNDANT
	.controller('SecondQuoteFormController', ['$scope', 'QuoteData',
		function($scope, QuoteData){

			$scope.quote = QuoteData;

			$scope.getQuote = function(){

			};
		}
	])

	.controller('QuoteController', ['$scope',
		function(){
			// business here motherfucker
		}
	])

	.controller('BlogController', ['$scope', '$http',
		function($scope, $http){
			$http
				.jsonp('http://nia.staging.wpengine.com/api/get_recent_posts/?callback=JSON_CALLBACK')
				.success(function(response){
					$scope.posts = response.posts;
					console.log($scope.posts);
				});

		}
	])

	.controller('ContactPopupController', ['$scope',
		function(){
		//function($scope){

		}
	])

	.controller('SupportPopupController', ['$scope',
		function(){

		}
	]);