'use strict';

angular.module('health.joincontrollers', [])
	.controller('JoinController', ['$scope', '$modal',
		function($scope, $modal){
			$scope.signupData = {};

			$scope.viewProduct = function(id){
				$modal.open({
					templateUrl: 'partials/modals/join.view-product.html',
					windowClass: 'product-view',
					resolve: {
						Product: function(){
							// Grab the resource with ID above.
							return 'product';
						}
					},
					controller: function($scope, Product){
						// This will be a dynamicly 
						// grabbed product to show
						console.log(id, $scope, Product);
					}
				});
			};

			$scope.joinMember = function(){

			};
		}
	])

	.controller('JoinLicenseController', ['$scope', '$state', '$modal', '$timeout',
		function($scope, $state, $modal, $timeout){
			$scope.page = {
				title: 'Snap a photo of your license',
				content: 'We use this to grab information such as your age and address',
				type: 'license'
			};

			$scope.next = function(){
				$state.go('join.medicare');
			};

			$scope.after = function(){
				$modal.open({
					templateUrl: 'partials/join/modal.correct-address.html',
					controller: function($scope){
						$scope.correct_address = true;
						$scope.address = '';
						// WOULD BE COOL IF THIS USED AUTOCOMPLETE

						$scope.accept = function(correct){
							if(correct){
								$scope.$close($scope.address);
							} else {
								$scope.$close('correct');
							}
						};
					}
				})
				.result.then(function(address){
					$scope.signupData.address = address;
					$timeout($scope.next, 700);
				});
			};
		}
	])

	.controller('JoinMedicareController', ['$scope', '$state', '$modal', '$timeout',
		function($scope, $state, $modal, $timeout){
			$scope.page = {
				title: 'Next, your medicare card',
				content: 'We can grab your other policy holders from this.',
				type: 'medicare'
			};

			$scope.next = function(){
				$state.go('join.current-insurance');
			};

			$scope.after = function(){
				$modal.open({
					templateUrl: 'partials/join/modal.medicare-holders.html',
					controller: function($scope){
						$scope.steps = {
							removePeople: true,
							addPeople: false,
						};

						$scope.areYou = {
							removingPeople: false,
							addingPeople: false,
							details: [{}]
						};

						$scope.addPerson = function(){
							$scope.areYou.details.push({});
						};

						$scope.accept = function(){
							$scope.$close($scope.areYou);
							$timeout($scope.next, 700);
						};

						$scope.next = function(){
							$state.go('join.current-insurance');
						};
					}
				})
				.result.then(function(areYou){
					$scope.signupData.callToRemove = areYou.removingPeople;
					$scope.signupData.additionalHolders = areYou.details;
				});
			};
		}
	])

	.controller('JoinCurrentController', ['$scope', '$state', '$modal', '$timeout',
		function($scope, $state, $modal, $timeout){
			$scope.page = {
				title: 'Finally, your current health insurance card',
				content: 'Be sure to take a photo of the side with your policy details on it! This helps us switch you faster.',
				type: 'current-insurance'
			};

			$scope.after = function(){
				$modal.open({
					templateUrl: 'partials/join/modal.moving-all.html',
					controller: function($scope){
						$scope.accept = function(moveAll){
							if(moveAll){
								$scope.$close('yes');
							} else {
								$scope.$close('no');
							}

							$timeout($scope.next, 700);
						};

						$scope.next = function(){
							$state.go('join.thanks');
						};
					}
				}).result.then(function(result){
					$scope.signupData.movingAllFromOld = result;
				});
			};


		}
	]);