'use strict';

angular.module('health.config.find', ['ui.router'])
.config(['$stateProvider', function($stateProvider){
	$stateProvider
	.state('find', {
		url: '/find',
		templateUrl: 'partials/pages/find.html',
		controller: 'FindController'
	})

	.state('find.priority', {
		url: '/',
		templateUrl: 'partials/find/find.select.html',
		controller: function($scope){
			$scope.selectOptions = $scope.options.priority;
			$scope.page = {
				type: 'priority',
				next: 'find.age',
				title: 'What\'s your priority?'
			}
		}
	})

	.state('find.age', {
		url: '/:priority',
		templateUrl: 'partials/find/find.select.html',
		controller: function($scope){
			$scope.selectOptions = $scope.options.age;
			$scope.page = {
				type: 'age',
				next: 'find.hospital',
				title: 'How old are you?'
			}
		}
	})

	.state('find.hospital', {
		url: '/:priority/:age',
		templateUrl: '/partials/find/find.pick.html',
		controller: function($scope){
			$scope.selectOptions = $scope.options.hospital;
			$scope.page = {
				type: 'hospital',
				next: 'find.extras',
				title: 'What sort of hospital cover do you need?'
			}
		}
	})

	.state('find.extras', {
		url: '/:priority/:age/:hospital',
		templateUrl: '/partials/find/find.pick.html',
		controller: function($scope){
			$scope.selectOptions = $scope.options.extras;
			$scope.page = {
				type: 'extras',
				next: 'find.show',
				title: 'What sort of extras do you need?'
			}
		}
	})

	.state('find.show', {
		url: '/:priority/:age/:hospital/:extras/:policy/:state/:income',
		templateUrl: '/partials/find/find.show.html',
		controller: 'FindShowController'
	})

}]);