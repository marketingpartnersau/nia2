'use strict';

angular.module('health.controllers', [])

	.controller('MainController', ['$scope', '$rootScope', '$state',
		function($scope, $rootScope, $state){

			$rootScope.$state = $state;

			$scope.uiStates = {
				bottomDrawerOpen: false,
				topDrawerOpen: false,
			};

			// WHY DID THIS STOP WORKING
			$rootScope.$on('$stateChangeStart',
				function(event, toState){
					if(toState.name === 'home'){
						$scope.overflowY = {overflow: 'hidden'};
					}
					else {
						$scope.overflowY = {overflow: 'scroll'};

						// remove all events 
						// $.fn.fullpage.setAllowScrolling(false);
						// $.fn.fullpage.setKeyboardScrolling(false);
						// $(window).off('hashchange');
						// $(document).off('click', '#fullPage-nav a');
						// $('.section').off('click', '.toSlide');
						// $(document).off('click', '.fullPage-slidesNav a');
					}
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

	

	// THIS ONE IS SORTA REDUNDANT
	.controller('SecondQuoteFormController', ['$scope', 'QuoteData',
		function($scope, QuoteData){

			$scope.quote = QuoteData;

			$scope.getQuote = function(){

			};
		}
	])

	.controller('BlogController', ['$scope', '$http',
		function($scope, $http){
			$http
				.jsonp('http://nia.staging.wpengine.com/api/get_recent_posts/?callback=JSON_CALLBACK')
				.success(function(response){
					$scope.posts = response.posts;
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