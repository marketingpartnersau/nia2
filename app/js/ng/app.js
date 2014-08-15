'use strict';

angular.module('health', [
		'ngAnimate',
		'ui.router',
		'ui.bootstrap.modal',
		'angularFileUpload',
		'angular-carousel',
		'health.directives',
		'health.services',
		'health.controllers',
		'health.controllers.join',
		'health.controllers.quote',
		'health.controllers.find',
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
			
			.state('quote', {
				url: '/quote',
				templateUrl: 'partials/pages/quote.html',
				controller: 'QuoteFormController'
			})

			.state('quote.return', {
				url: '/return',
				templateUrl: 'partials/quote/quote.return.html'
			})

			.state('quote.policy', {
				url: '/',
				templateUrl: 'partials/quote/quote.select.html',
				controller: function($scope){
					$scope.page = {
						title: 'What best describes you?',
						type: 'policy',
						next: 'quote.location',
						return: true
					};
				}
			})

			.state('quote.location', {
				url: '/:policy',
				templateUrl: '/partials/quote/quote.select.html',
				controller: function($scope, $state, $stateParams){
					$scope.page = {
						title: 'What are you from?',
						type: 'state',
						next: 'quote.age'
					};
				}
			})

			.state('quote.age', {
				url: '/:policy/:state',
				templateUrl: '/partials/quote/quote.select.html',
				controller: function($scope, $state, $stateParams){
					$scope.page = {
						title: 'How old are you?',
						content: 'If a couple, please pick the oldest out of you. Sorry to be rude - it helps us recommend you better.',
						type: 'age',
						next: 'quote.income'
					};
				}
			})

			.state('quote.income', {
				url: '/:policy/:state/:age',
				templateUrl: '/partials/quote/quote.income-select.html',
				controller: function($scope, $state, $stateParams){
					$scope.page = {
						title: 'How much do you earn?',
						content: 'We use this to give you an accurate rebate.',
						type: 'income',
						next: 'quote.priority',
						policy: function(){
							if($stateParams.policy === 'Sgl'){
								return 'single';
							} else {
								return 'house';
							}
						}
					};
				}
			})

			.state('quote.priority', {
				url: '/:policy/:state/:age/:income',
				templateUrl: '/partials/quote/quote.select.html',
				controller: function($scope, $state, $stateParams){
					$scope.page = {
						title: 'What are you looking for?',
						type: 'priority',
						next: 'quote.show'
					};
				}
			})

			.state('quote.show', {
				url: '/:policy/:state/:age/:income/:priority/:i',
				templateUrl: '/partials/quote/quote.show.html',
				controller: 'QuoteController'
			})

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
			})

			.state('why-us', {
				url: '/why-us',
				templateUrl: 'partials/pages/why-us.html',
			})

			.state('about', {
				url: '/about',
				template: '<h2>About health.com.au</h2>'
			})

			.state('customers', {
				url: '/customers',
				templateUrl: 'partials/pages/customers.html'
			})

			.state('blog', {
				url: '/blog',
				templateUrl: 'partials/pages/blog.html',
				controller: 'BlogController'
			})
		}
	])
	.config(['$locationProvider',
		function($locationProvider) {
			$locationProvider.hashPrefix('!');
		}
	]);