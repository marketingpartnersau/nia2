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
				link: function(scope, element){
					scope.hideModal = function(){
						scope.show = false;
					};
				}
			};
		}
	])

	.directive('coolSelect', [
		function(){
			return {
				restrict: 'E',
				replace: true,
				templateUrl: 'partials/interface/select.html',
				scope: {
					userinput: '='
				},
				link: function(scope, element, attrs){
					scope.options = attrs.options;
					scope.label   = attrs.default; 
				}
			};
		}
	]);