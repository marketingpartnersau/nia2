'use strict';

angular.module('health.config', [])
	.config(['$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider){
			$urlRouterProvider.otherwise('/');

			$stateProvider
			.state('home', {
				url: '/',
				templateUrl: '/partials/pages/home.html',
				controller: 'HomeController'
				// Maybe use views here instead of nested
				// states to get the testimonials and
				// proof points working. Or not as it would
				// be cool to get them accessible via URL.
				// the issue here could also be reloading
				// the home page when returning to home
			})

			.state('why-us', {
				url: '/why-us',
				templateUrl: '/partials/pages/why-us.html',
			})

			.state('about', {
				url: '/about',
				template: '<h2>About health.com.au</h2>'
			})

			.state('customers', {
				url: '/customers',
				templateUrl: '/partials/pages/customers.html'
			})

			.state('blog', {
				url: '/blog',
				templateUrl: '/partials/pages/blog.html',
				controller: 'BlogController'
			})
		}
	])
	.config(['$locationProvider',
		function($locationProvider) {
			$locationProvider.hashPrefix('!');
		}
	]);