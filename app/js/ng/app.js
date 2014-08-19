'use strict';

angular.module('health', [
		'ngAnimate',
		'ui.router',
		'ui.bootstrap.modal',
		'angularFileUpload',
		'angular-carousel',

		// Route dependancies
		'health.config',
		'health.config.quote',
		'health.config.find',
		'health.config.join',
		'health.config.apply',

		// Directives
		'health.directives',

		// Services
		'health.services',

		// Controllers
		'health.controllers',
		'health.controllers.join',
		'health.controllers.apply',
		'health.controllers.quote',
		'health.controllers.find',
	]);