'use strict';

angular.module('health.config.quote', ['ui.router'])
.config(['$stateProvider', function($stateProvider){
	$stateProvider
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
	});
}])