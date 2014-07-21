'use strict';

var controllers = angular.module('health.controllers', [])

	.controller('MainController', ['$scope',
		function($scope){
			$scope.uiStates = {
				bottomDrawerOpen: false,
				topDrawerOpen: false,
				showModal: ''
			}

			window.scope = $scope;

			$scope.openModal = function(modal){
				$scope.uiStates.showModal = modal;
			}
		}
	])

	.controller('MenuBarController', ['$scope',
		function($scope){

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

	.controller('TopBarController', ['$scope',
		function($scope){

			$scope.toggleDrawer = function(){
				$scope.uiStates.bottomDrawerOpen = false;
				if(!$scope.uiStates.topDrawerOpen){
					$scope.uiStates.topDrawerOpen = true;
				} else { 
					$scope.uiStates.topDrawerOpen = false;
				}
			};

		}
	])

	.controller('HomeController', ['$scope', 'HomeData',
		function($scope, HomeData){
			$scope.data = HomeData;
		}
	])

	.controller('ContactPopupController', ['$scope',
		function($scope){

		}
	]);