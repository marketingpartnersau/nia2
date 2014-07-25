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
					controller: 'SecondQuoteFormController'
				})

				.state('quote.type', {
					url: '/get',
					templateUrl: 'partials/quote/quote.type.html'
				})

				.state('quote.return', {
					url: '/return',
					templateUrl: 'partials/quote/quote.return.html'
				})

				.state('quote.policy', {
					url: '/policy',
					templateUrl: 'partials/quote/quote.select.html',
					controller: function($scope){
						$scope.page = {
							title: 'What best describes you?',
							type: 'policy',
							next: 'location'
						};
					}
				})

				.state('quote.location', {
					url: '/location',
					templateUrl: 'partials/quote/quote.select.html',
					controller: function($scope){
						$scope.page = {
							title: 'What are you from?',
							type: 'state',
							next: 'priority'
						};
					}
				})

				.state('quote.priority', {
					url: '/priority',
					templateUrl: 'partials/quote/quote.select.html',
					controller: function($scope){
						$scope.page = {
							title: 'What are you looking for?',
							type: 'priority',
							next: 'age-income'
						};
					} 
				})

				.state('quote.age-income', {
					url: '/age',
					templateUrl: 'partials/quote/quote.age-income.html',
					controller: function($scope){
						$scope.page = {
							title: 'Lastly, some information about you.',
							content: ''
						};
					}
				})

				.state('quote.show', {
					url: '/show',
					templateUrl: 'partials/quote/quote.show.html',
					controller: 'QuoteController'
				})
				
				.state('quote2', {
					// Other quote template.
					url: '/quote2',
					templateUrl: 'partials/pages/quote.html',
					controller: 'QuoteFormController'
				})

				.state('why-us', {
					url: '/why-us',
					templateUrl: 'partials/pages/why-us.html',
				})

				.state('customers', {
					url: '/customers',
					templateUrl: 'partials/pages/customers.html'
				})

				.state('blog', {
					url: '/blog',
					template: '<h2>Blog will go here...</h2>'
				});
		}
	])
	.config(['$locationProvider',
		function($locationProvider) {
			$locationProvider.hashPrefix('!');
		}
	]);