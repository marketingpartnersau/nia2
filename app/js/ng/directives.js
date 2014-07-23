'use strict';

angular.module('health.directives', [])
	.directive('fullPageScroll', [
		function(){
			return {
				restrict: 'A',
				link: function(scope, element){
					angular.element(element).fullpage( { easing: $.bez([0.4, 0, 0.2, 1]) } );
				}
			};
		}
	])

	.directive('topBar', [
		function(){
			return {
				restrict: 'E',
				replace: true,
				controller : 'TopBarController',
				templateUrl: 'partials/interface/header.html'
			};
		}
	])

	.directive('bottomBar', [
		function(){
			return {
				restrict: 'E',
				replace: true,
				controller: 'MenuBarController',
				templateUrl: 'partials/interface/menu.html'
			};
		}
	])

	.directive('productOnHome', [
		function(){
			return {
				restrict: 'E',
				replace: true,
				scope : {
					product: '='
				},
				templateUrl: 'partials/products/product-on-home.html'
			};
		}
	])

	.directive('sexyModal', [
		function(){
			return {
				restrict: 'E',
				replace: true,
				transclude: 'element',
				templateUrl: 'partials/interface/modal.html',
				scope : {
					show: '='
				},
				link: function(scope){
					scope.hideModal = function(){
						scope.show = false;
					};
				}
			};
		}
	])

	.directive('selectModal', ['QuoteData',
		function(QuoteData){
			return {
				restrict: 'E',
				replace: true,
				transclude: true,
				templateUrl: 'partials/interface/select-modal.html',
				scope : {
					options : '=',
					show: '=',
					userinput: '='
				},
				controller: function($scope){
					$scope.selectOption = function(option){
						$scope.show = false;
						$scope.userinput = option;
						$scope.$parent.$parent.closeModal();
					};
				}
			}
		}
	]);

	// .directive('coolSelect', ['CoolSelect',
	// 	function(CoolSelect){
	// 		return {
	// 			restrict: 'E',
	// 			replace: true,
	// 			templateUrl: 'partials/interface/select.html',
	// 			scope: {
	// 				options: '=',
	// 				userinput: '=',
	// 				label: '@',
	// 				open: '='
	// 			},
	// 			controller: function($scope){

	// 				$scope.states = CoolSelect.isOpen;

	// 				$scope.toggleSelect = function(){
	// 					var originalState = $scope.open;

	// 					angular.forEach($scope.states, function(k,v){
	// 						k = false;
	// 					});

	// 					$scope.open = !originalState;
	// 				};

	// 				$scope.updateSelect = function(option){
	// 					$scope.userinput = option;
	// 					$scope.open = false;
	// 					$scope.label = option.label;
	// 				};

	// 			}
	// 		};
	// 	}
	// ]);