'use strict';

angular.module('health.directives', [])
	.directive('fullPageScroll', [
		function(){
			return {
				restrict: 'A',
				link: function(scope, element){
					// I probably need to detach this when the state
					// changes as it is being double bound.
					// this overflow: scroll thing is a bitch too.
					scope.fullpage = angular.element(element).fullpage({
						easing: $.bez([0.4, 0, 0.2, 1]),
						//onLeave: function(){
						// onLeave: function(left, entered, direction){
						// 	//console.log(left, entered, direction);
						// 	// Here you should add and remove
						// 	// animation classes to animate
						// 	// the slide content.
						// 	element.children().eq()
						// },
						afterRender: function(){
							// loggin in this indicates it's being
							// instantiated twice. That sucks.
						}
					});
				}, 
				controller: function(){
					// console.log($scope);
					// $scope.fullPage.moveTo(0);
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
				link: function(scope, el, attr){
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