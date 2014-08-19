'use strict';

angular.module('health.config.apply', ['ui.router'])
	.config(['$stateProvider', function($stateProvider){

		$stateProvider
		.state('apply', {
			url: '/apply',
			template: 'Apply now'
		})

	}]);