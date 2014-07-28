'use strict';

angular.module('health.controllers', [])

	.controller('MainController', ['$scope', '$rootScope',
		function($scope, $rootScope){

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
		}
	])

	.controller('TopBarController', ['$scope',
		function($scope){
			
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

	.controller('HomeController', ['$scope', 'HomeData', 'Testimonials',
		function($scope, HomeData, Testimonials){
			console.log(Testimonials);
			$scope.testimonials = Testimonials.testimonials;
			$scope.data = HomeData;
			$scope.noOverflow = {};
		}
	])

	.controller('TestimonialsController', ['$scope', 'Testimonials',
		function($scope, Testimonials){
			$scope.testimonials = Testimonials.testimonia;
		}
	])

	.controller('ProofController', ['$scope', 'ProofData',
		function($scope, ProofData){
			$scope.awards = ProofData.awards;
			$scope.press = ProofData.press;
		}
	])

	.controller('SecondQuoteFormController', ['$scope', 'QuoteData2',
		function($scope, QuoteData2){

			$scope.options = QuoteData2.options;
			$scope.formData = {};

			$scope.getQuote = function(){
				// on submit
			};
		}
	])

	.controller('QuoteFormController', ['$scope', 'QuoteData',
		function($scope, QuoteData){

			$scope.quote = QuoteData;

			$scope.getQuote = function(){

			};
		}
	])

	.controller('QuoteController', ['$scope',
		function($scope){
			// business here motherfucker
		}
	])

	.controller('JoinController', ['$scope',
		function($scope){
			$scope.signupData = {};

			$scope.joinMember = function(){

			};

			$scope.onFileSelect = function($files){

			}
		}
	])

	.controller('ContactPopupController', ['$scope',
		function(){
		//function($scope){

		}
	]);