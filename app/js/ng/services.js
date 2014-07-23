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
					{name: 'Megan, QLD', description: 'Impressed with the level of service received so far and it\'s never difficult to make the phone call for assistance.'},
					{name: 'Lucy, NSW', description: 'I found the whole joining process really easy and hassle free! Just the way I like it.'},
					{name: 'Robyn, VIC', description: 'Many many thanks for your time and patience (over live chat assistance). I’m glad that I decided to join with your company, such pleasurable helpful people you are.'}
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