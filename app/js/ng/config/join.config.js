'use strict';

angular.module('health.config.join', ['ui.router'])
.config(['$stateProvider', function($stateProvider){
	$stateProvider
	.state('join', {
		url: '/join',
		templateUrl: 'partials/pages/join.html',
		controller: 'JoinController'
	})

	.state('join.start', {
		url: '/',
		templateUrl: 'partials/join/join.start.html'
	})

	.state('join.license', {
		url: '/license',
		templateUrl: 'partials/join/join.upload.html',
		controller: 'JoinLicenseController'
	})

	.state('join.medicare', {
		url: '/medicare',
		templateUrl: 'partials/join/join.upload.html',
		controller: 'JoinMedicareController'
	})

	.state('join.current-insurance', {
		url: '/current-insurance',
		templateUrl: 'partials/join/join.upload.html',
		controller: 'JoinCurrentController'
	})

	.state('join.thanks', {
		url: '/thanks',
		templateUrl: 'partials/join/join.thanks.html'
	});
}]);