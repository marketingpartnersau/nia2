'use strict';

angular.module('health.services', [])
	.factory('HomeData', [
		function(){
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
			};
		}
	])

	.factory('SiteData', [
		function(){
			return {
				moreMenuItems: [
					{name: 'Blog', description: 'Read our stuff'},
					{name: 'Claim Online', description: 'Claim right now'},
					{name: '10 Second Quote', description: 'Swear to god!'}
				]
			};
		}
	])

	.service('QuoteData', [
		function(){
			//Anything here?

			return {
				options: {
					demographics: [
						{ value: 'Sgl',		age: '31', label: 'Single, Under 31' },
						{ value: 'Fam',		age: '38', label: 'Middle aged Family' },
						{ value: 'Cpl',		age: '31', label: 'Young couple on the loose' },
						{ value: 'SPFam',	age: '31', label: 'Young Single Parent' },
					],
					states: [
						{ value: 'NSW',		label: 'New South Wales' },
						{ value: 'VIC', 	label: 'Victoria' },
						{ value: 'QLD', 	label: 'Queensland' },
						{ value: 'TAS', 	label: 'Tasmania' },
						{ value: 'ACT', 	label: 'Australian Capital Territory' },
						{ value: 'NT',  	label: 'Northern Territory' },
						{ value: 'SA',  	label: 'South Australia' },
						{ value: 'WA',  	label: 'Western Australia' }
					],
					priorities: [
						{value: 'cheap', 	label: 'The cheapest insurance'},
						{value: 'tax', 		label: 'To save on tax'},
						{value: 'family', 	label: 'To have more kids'},
						{value: 'coverage', label: 'The best insurance'}
					]
				},
				input: {}
			}
		}
	]);

	// .service('CoolSelect', [
	// 	function(){
	// 		return {
	// 			isOpen: {}
	// 		}
	// 	}
	// ]);