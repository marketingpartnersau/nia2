'use strict';

angular.module('health.controllers.find', [])
	.controller('FindController', ['$scope', 'FindData',
	function($scope, FindData){

		$scope.options = FindData.options;
		$scope.formData = {
			selections: {}
		};

		$scope.$on('$stateChangeStart', 
		function(event, toState, toParams, fromState, fromParams){
			_.each(fromParams, function(val, key){
				toParams[key] = val;
			});
		});

		$scope.$on('$stateChangeSuccess', 
		function(event, toState, toParams, fromState, fromParams){
			_.each(toParams, function(val, key){
				$scope.formData.selections[key] = val;
			});
		});
	}])

	.controller('FindShowController', ['$scope', '$stateParams', '$modal', 'Products', 'FindData',
	function($scope, $stateParams, $modal, Products, FindData){
		$scope.products = Products.products;
		$scope.formData.selections = $stateParams;

		$scope.params = {
			frequency: 'week',
			inclusion: 'hospitals'
		};

		$scope.updatePrice = function(){
			console.log($scope.formData.selections);
		}

		$scope.getAccurateQuote = function(){
			$modal
			.open({
				templateUrl: '/partials/find/find.accurate.html',
				controller: 'FindAccurateModalController',
				resolve: {
					options: function(){
						return FindData;
					}
				}
			})
			.result.then(function(result){
				_.each(result, function(v, k){
					$scope.formData.selections[k] = v;
					$stateParams = $scope.formData.selections;
				});

				$scope.updatePrice();

				$scope.modalInstance = undefined; // <!-- hack
			});
		};
	}])

	.controller('FindAccurateModalController', ['$scope', '$timeout', 'FindData',
	function($scope, $timeout, FindData){
		$scope.selections = {};

		$scope.pageHidden = {
			policy: false,
			state: true,
			income: true,
			confirm: true
		};

		$scope.options = FindData.options;
		$scope.pages = FindData.accurate.pages;

		$scope.next = function(next){
			_.each($scope.pageHidden, function(v, k){
				$scope.pageHidden[k] = true;
			})

			$scope.pageHidden[next] = false; 

			if(next === 'confirm'){
				// GET DATA HERE I THINK
				// SUCCESSFUL DATA GET CLOSES
				// THE MODAL. SPINNY THING 
				// IN THE MEAN TIME
				$timeout(function(){
					$scope.$close($scope.selections);
				}, 2000);
			}
		};
	}])