'use strict';

var directives = angular.module('health.directives', [])
	.directive('fullPageScroll', [
		function(){
			return {
				restrict: 'A',
				link: function(scope, element, attrs){
					angular.element(element).fullpage( { easing: $.bez([0.4, 0, 0.2, 1]) } );
				}
			}
		}
	])
	.directive('productOnHome', [
		function(){
			return {
				restrict: 'E',
				replace: true,
				scope : {
					product: "="
				},
				templateUrl: 'partials/products/product-on-home.html'
			}
		}
	])

	.directive('sexyModal', [
		function(){
			return {
				restrict: 'E',
				replace: true,
				transclude: 'element',
				templateUrl: 'partials/interface/modal.html',
				link: function(scope, element, attrs){
					// This is obscenely frustrating.
					// Trying to get an object from parent scope
					// and match it against an attr of the directive.
					// Maybe I'm doing this wrong. 
					console.log('modalScope', scope);
				}
			}
		}
	]);