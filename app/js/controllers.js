'use strict';

var controllers = angular.module('health.controllers', [])

	.controller('HomeController', ['$scope',
		function($scope){
			$scope.uiStates = {
				bottomDrawerOpen: false,
				topDrawerOpen: false,
				menuBarDrawer: 'more'
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
	]);