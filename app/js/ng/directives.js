'use strict';

angular.module('health.directives', [])
	.directive('fullPageScroll', [
		function(){
			return {
				restrict: 'A',
				link: function(scope, element){
					scope.fullpage = angular.element(element).fullpage({
						easing: $.bez([0.4, 0, 0.2, 1])
					});
				},
				controller: function($scope){
					console.log($scope);
					$scope.$on('$stateChangeStart', function(){
						// function takes event, toState, etc
						//$.fn.fullpage.destroy();
					});
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

	.directive('sexyModal', [
		function(){
			return {
				restrict: 'E',
				replace: true,
				transclude: 'element',
				templateUrl: 'partials/interface/modal.html',
				scope : {
					show: '=',
					data: '@'
				},
				link: function(scope){
					scope.hideModal = function(){
						scope.show = false;
					};
				}
			};
		}
	])

	.directive('selectModal', [
		function(){
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
			};
		}
	])

	.directive('imageUploadButton', ['$interval', '$timeout',
		function($interval, $timeout){
			return {
				restrict: 'E',
				replace: true,
				templateUrl: 'partials/interface/progress-button.html',
				scope: {
					photo: '=',
					callback: '&callbackFn'
				},
				link: function(scope){
					scope.params = {
						status: 'Tap to capture',
						icon: 'camera',
						progress: 0,
						loading: false
					};

					scope.onFileSelect = function(){
						scope.params.status = 'Uploading...';
						scope.params.icon = 'spinner fa-spin';
						scope.params.loading = true;
						scope.progressTimer = $interval(scope.doProgress, 200);
					};

					scope.finishedUploading = function(){
						scope.params.status = 'Thanks!';
						scope.params.icon = 'check';
						scope.params.loading = false;
						$interval.cancel(scope.progressTimer);
						$timeout(function(){
							if(typeof scope.callback === 'function'){
								scope.callback();
							}
						}, 1000);
					};

					scope.doProgress = function(){
						if(scope.params.progress === 100){
							scope.finishedUploading();
						} else if (scope.params.progress < 100) {
							scope.params.progress = scope.params.progress+=10;
						}
					};
				}
			};
		}
	])
	
	.directive('quoteSelect', ['QuoteData', '$modal',
		function(QuoteData, $modal){
			return {
				restrict: 'E',
				replace: true,
				templateUrl: 'partials/interface/quote-parameter.html',
				scope: {
					param: '@',
					value: '='
				},
				link: function(scope){
					scope.reselectQuoteParam = function(param){
						$modal.open({
							templateUrl: 'partials/quote/quote.modal.select.html',
							resolve: {
								param: function(){
									return param;
								}
							},
							controller: function($scope, param){
								$scope.options = QuoteData.options[param];
								$scope.updateParam = function(val){
									$scope.$close(val);
								};
							}
						}).result.then(function(val){
							scope.value = val;
						});
					};
				}
			};
		}
	])

	.directive('product', ['$timeout',
		function($timeout){
			return {
				restrict: 'E',
				replace: true,
				templateUrl: 'partials/interface/product.html',
				scope: {
					product: '=',
					params: '='
				},
				link: function(scope){
					scope.productMeta = {
						extra_back: '65%',
						excess: '$250',
						price: 1123.44
					};

					scope.actions = {
						showSaveForm: false,
					};
				}
			};
		}
	])

	.directive('buttonGroup', [
		function(){
			return {
				restrict: 'E',
				replace: true,
				templateUrl: 'partials/interface/button-group.html',
				scope: {
					options: '=',
					model: '=',
					text: '@'
				},
				link: function(scope){
					scope.updateModel = function(option){
						scope.model = option;
					};
				}
			};
		}
	]);