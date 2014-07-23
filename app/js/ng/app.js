'use strict';

angular.module('health', [
		'ngAnimate',
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
					templateUrl: 'partials/pages/home.html',
					controller: 'HomeController'
				})
				
				.state('quote', {
					url: '/quote',
					templateUrl: 'partials/pages/quote.html',
					controller: 'QuoteController'
				})

				.state('why-us', {
					url: '/why-us',
					templateUrl: 'partials/pages/why-us.html',
				})

				.state('customers', {
					url: '/customers',
					templateUrl: 'partials/pages/customers.html'
				});
		}
	])
	.config(['$locationProvider',
		function($locationProvider) {
			$locationProvider.hashPrefix('!');
		}
	]);