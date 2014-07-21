'use strict';

var services = angular.module('health.services', [])
	.factory('HomeData', function(){
		return {
			products : [
				{name: 'Basic 65', description: 'Basic 65 is a product for everyone. With simple and essential coverage, we\'ve got your back.'},
				{name: 'HeartCare Middle 65', description: 'HeartCare 65 is for the golden oldies - with extra coverage for anything heart-related.'},
			],
			testimonials: [
				{name: 'Jack Jones', description: 'We have just been through the birth of our second child and so far it seems nothing is too much trouble at health.com.au. Having a child is stressful enough, so not having to deal with difficult health insurers is a great bonus!'}
			],
			reasons: [
				{name: 'We rock', description: 'We’re a new sort of health insurance, and we’ve got some of the best people in the business behind us.'},
				{name: 'We love online', description: 'We don’t want to send receipts in by snail mail, and we definitely don’t want to visit anyone’s shop to wait inline and fill out forms.'},
				{name: 'Customer service with a heart.', description: 'When you need to speak with someone, we are here for you.'},
				{name: 'Some other reason', description: 'When you need to speak with someone, we are here for you.'}
			]
		}
	});