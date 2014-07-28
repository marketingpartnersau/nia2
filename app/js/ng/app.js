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
					// Maybe use views here instead of nested
					// states to get the testimonials and
					// proof points working. Or not as it would
					// be cool to get them accessible via URL.
					// the issue here could also be reloading
					// the home page when returning to home
				})

				.state('home.testimonials', {
					url: '/testimonials',
					onEnter: function($state){
						// HOW TO GET THIS OPEN MODAL WORKING. 
						// I think I need to create $modal service.
						openModal('testimonials');
					}
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

				// .state('products' {

				// })

				// .state('products.show/:product_id')
				
				.state('quote2', {
					// Other quote template.
					url: '/quote2',
					templateUrl: 'partials/pages/quote.html',
					controller: 'QuoteFormController'
				})

				.state('join', {
					url: '/join',
					templateUrl: 'partials/pages/join.html',
					controller: 'JoinController'
				})

				.state('join.start', {
					url: '/start',
					templateUrl: 'partials/join/join.start.html'
				})

				.state('join.license', {
					url: '/license',
					templateUrl: 'partials/join/join.upload.html',
					controller: function($scope){
						$scope.page = {
							title: 'Snap a photo of your license',
							content: 'We use this to grab information such as your age and address',
							type: 'license',
							next: 'medicare'
						}
					}
				})

				.state('join.medicare', {
					url: '/medicare',
					templateUrl: 'partials/join/join.upload.html'
				})

				.state('join.current-insurance', {
					url: '/current-insurance',
					templateUrl: 'partials/join/join.upload.html'
				})

				.state('join.thanks', {
					url: '/thanks',
					templateUrl: 'partials/join/join.complete.html'
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