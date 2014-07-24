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
					templateUrl: 'partials/pages/quote2.html',
					controller: 'SecondQuoteController'
				})

				.state('quote.type', {
					url: '/get',
					templateUrl: 'partials/quote/quote-type.html'
				})

				.state('quote.return', {
					url: '/return',
					templateUrl: 'partials/quote/quote-return.html'
				})

				.state('quote.policy', {
					url: '/policy',
					templateUrl: 'partials/quote/quote-policy.html'
				})

				.state('quote.location', {
					url: '/location',
					templateUrl: 'partials/quote/quote-location.html'
				})

				.state('quote.age-income', {
					url: '/age',
					templateUrl: 'partials/quote/quote-age-income.html'
				})

				.state('quote.priority', {
					url: '/priority',
					templateUrl: 'partials/quote/quote-priority.html'
				})
				
				.state('quote2', {
					// Other quote template.
					url: '/quote2',
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