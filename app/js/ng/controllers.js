'use strict';

angular.module('health.controllers', [])

	.controller('MainController', ['$scope',
		function($scope){
			$scope.uiStates = {
				bottomDrawerOpen: false,
				topDrawerOpen: false,
				modalIsVisible: {}
			};

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

			$scope.toggleTopDrawer = function(){
				$scope.uiStates.bottomDrawerOpen = false;
				if(!$scope.uiStates.topDrawerOpen){
					$scope.uiStates.topDrawerOpen = true;
				} else { 
					$scope.uiStates.topDrawerOpen = false;
				}
			};
		}
	])

	.controller('MenuBarController', ['$scope', 'SiteData',
		function($scope, SiteData){

			$scope.items = SiteData.moreMenuItems;

			$scope.toggleDrawer = function(){
				$scope.uiStates.topDrawerOpen = false;
				if(!$scope.uiStates.bottomDrawerOpen){
					$scope.uiStates.bottomDrawerOpen = true;
				} else { 
					$scope.uiStates.bottomDrawerOpen = false;
				}
			};
		}
	])

	.controller('HomeController', ['$scope', 'HomeData',
		function($scope, HomeData){
			$scope.data = HomeData;
		}
	])

	.controller('QuoteController', ['$scope', 'QuoteData',
		function($scope, QuoteData){

			$scope.quote = QuoteData;
			window.scope = $scope.quote;

			$scope.getQuote = function(){

			};
		}
	])

	.controller('ContactPopupController', ['$scope',
		function($scope){

		}
	]);