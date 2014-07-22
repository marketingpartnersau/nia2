'use strict';

var controllers = angular.module('health.controllers', [])

	.controller('MainController', ['$scope',
		function($scope){
			$scope.uiStates = {
				bottomDrawerOpen: false,
				topDrawerOpen: false,
				modalIsVisible: {}
			};

			window.scope = $scope;

			$scope.openModal = function(modal){
				$scope.uiStates.modalIsVisible[modal] = !$scope.uiStates.modalIsVisible[modal];
			};

			$scope.closeModal = function(){
				angular.forEach($scope.uiStates.modalIsVisible, function(state, modal){
					if(state)
						$scope.uiStates.modalIsVisible[modal] = false;
				});
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

			$scope.toggleDrawer = function(location){
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

	.controller('QuoteController', ['$scope',
		function($scope){
			$scope.quote = {
				options: {
					demographics: [
						{ policy: 'Sgl', age: '31', label: 'Single, Under 31' },
						{ policy: 'Fam', age: '38', label: 'Middle aged Family' },
						{ policy: 'Cpl', age: '31', label: 'Young couple on the loose' },
						{ policy: 'SPFam', age: '31', label: 'Young Single Parent' },
					],
					states: [
						{ state: 'NSW', label: 'New South Wales' },
						{ state: 'VIC', label: 'Victoria' },
						{ state: 'QLD', label: 'Queensland' },
						{ state: 'TAS', label: 'Tasmania' },
						{ state: 'ACT', label: 'Australian Capital Territory' },
						{ state: 'NT',  label: 'Northern Territory' },
						{ state: 'SA',  label: 'South Australia' },
						{ state: 'WA',  label: 'Western Australia' }
					]
				},
				input: {}
			};

			$scope.getQuote = function(){

			};
		}
	])

	.controller('ContactPopupController', ['$scope',
		function($scope){

		}
	]);