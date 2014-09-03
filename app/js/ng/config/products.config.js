'use strict';

angular.module('health.config.products', [])
	
	.config(['$stateProivider'], function($stateProivider){
		$stateProivider
		.state('insurance', {
			url : '/insurance',
		})

		.state('insurance.recommend', {
			url: '/:policy/:state',

		})

		.state('insurance.product', {
			url: '/:policy/:state/:productCode',

		});

	});