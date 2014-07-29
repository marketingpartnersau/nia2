'use strict';

angular.module('health.controllers', [])

	.controller('MainController', ['$scope', '$rootScope', '$modal', '$log',
		function($scope, $rootScope, $modal, $log){

			$scope.uiStates = {
				bottomDrawerOpen: false,
				topDrawerOpen: false,
				modalIsVisible: {}
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

			$scope.state = $rootScope.state;
			window.overflowY = $scope.overflowY;

			$scope.openModal = function(modal){
				$scope.uiStates.modalIsVisible[modal] = !$scope.uiStates.modalIsVisible[modal];
				$scope.modalOpen = true;
			};

			$scope.closeModal = function(){
				angular.forEach($scope.uiStates.modalIsVisible, function(state, modal){
					if(state){
						$scope.uiStates.modalIsVisible[modal] = false;	
					}
				});
				$scope.modalOpen = false;
			};

			// THIS IS USING UI.BOOTSTRAP.MODAL

			$scope.open = function(template, data){
				console.log(template, data);
				var modalInstance = $modal.open({
					templateUrl: 'partials/modals/' + template + '.html',
					controller: function($scope, $modalInstance, data){
						console.log(data);
						$scope.data = data;
						$scope.close = function(){
							$modalInstance.close();
						};
					},
					resolve: { data: data }
				});

				modalInstance.result.then(function(result){
					$scope.result = result;
				}, function(){
					$log.info('Modal dismissed at ' + new Date());
				});
			};
		}
	])

	.controller('TopBarController', ['$scope',
		function(){
			
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

	.controller('HomeController', ['$scope', 'HomeData', 'Testimonials', 'Proof',
		function($scope, HomeData, Testimonials, Proof){
			$scope.testimonials = Testimonials.testimonials;
			$scope.proof = Proof;
			$scope.data = HomeData;
			$scope.noOverflow = {};
		}
	])

	.controller('SecondQuoteFormController', ['$scope', 'QuoteData2', 'GeoCode',
		function($scope, QuoteData2, GeoCode){

			$scope.options = QuoteData2.options;
			$scope.geocode = GeoCode;
			$scope.formData = {};

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

	// THIS ONE IS SORTA REDUNDANT
	.controller('QuoteFormController', ['$scope', 'QuoteData',
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

	.controller('JoinController', ['$scope',
		function($scope){
			$scope.signupData = {};

			$scope.joinMember = function(){

			};
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
	]);