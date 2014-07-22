'use strict';

var app = angular.module('health', [
		'ui.router',
		'health.directives',
		'health.services',
		'health.controllers'
	])

	.config(['$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider){
			$urlRouterProvider.otherwise('/');

			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: 'partials/home.html',
					controller: 'HomeController'
				})
				
				.state('quote', {
					url: '/quote',
					templateUrl: 'partials/quote.html',
					controller: 'QuoteController'
				})

				.state('why-us', {
					url: '/why-us',
					templateUrl: 'partials/why-us.html',
				})

				.state('customers', {
					url: '/customers',
					templateUrl: 'partials/customers.html'
				});
		}
	])
	.config(['$locationProvider',
		function($locationProvider) {
			$locationProvider.hashPrefix('!');
		}
	]);