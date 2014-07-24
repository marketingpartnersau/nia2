'use strict';

angular.module('health.services', [])
	.factory('HomeData', [
		function(){
			return {
				products : [
					{name: 'Basic 65', description: 'Cheap & Cheerful for young singles'},
					{name: 'HeartCare Middle 65', description: 'Perfect for the golden oldie'},
					{name: 'Extras 50', description: 'All the extras, zero hospital'},
					{name: 'High85', description: 'The best coverage in Australia'},
				],
				testimonials: [
					{name: 'Megan, QLD', description: 'Impressed with the level of service received so far and it\'s never difficult to make the phone call for assistance.'},
					{name: 'Lucy, NSW', description: 'I found the whole joining process really easy and hassle free! Just the way I like it.'},
					{name: 'Robyn, VIC', description: 'Many many thanks for your time and patience (over live chat assistance). I’m glad that I decided to join with your company, such pleasurable helpful people you are.'}
				],
				reasons: [
					{name: 'We rock', description: 'We’re a new sort of health insurance, and we’ve got some of the best people in the business behind us.'},
					{name: 'We love online', description: 'We don’t want to send receipts in by snail mail, and we definitely don’t want to visit anyone’s shop to wait inline and fill out forms.'},
					{name: 'Customer service with a heart.', description: 'When you need to speak with someone, we are here for you.'}
				]
			};
		}
	])

	.factory('SiteData', [
		function(){
			return {
				menuItems: [
					{name: 'Home', slug: 'home', icon: 'fa-home', state: 'home'},
					{name: 'Why Us', slug: 'why-us', icon: 'fa-question-circle', state: 'why-us'},
					{name: 'Quote', slug: 'quote', icon: 'fa-search', state: 'quote.type'},
					{name: 'Claim', slug: 'claim', icon: 'fa-user', state: 'customers'}
				],
				moreMenuItems: [
					{name: 'Customer Area', description: 'Everything you need', state: 'customers'},
					{name: 'Blog', description: 'Read our stuff', state: 'blog'},
					{name: '10 Second Quote', description: 'Swear to god!', state: 'quote2'}
				]
			};
		}
	])

	.factory('BlogData', [

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
	])

	.service('QuoteData2', [
		function(){
			return {
				options: {
					policy: [
						{ value: 'Sgl',   label: 'Single' },
						{ value: 'Cpl',   label: 'Couple' },
						{ value: 'Fam',   label: 'Family' },
						{ value: 'SPFam', label: 'Single Parent' }
					],
					state: [
						{ value: 'NSW',		label: 'New South Wales' },
						{ value: 'VIC', 	label: 'Victoria' },
						{ value: 'QLD', 	label: 'Queensland' },
						{ value: 'TAS', 	label: 'Tasmania' },
						{ value: 'ACT', 	label: 'Australian Capital Territory' },
						{ value: 'NT',  	label: 'Northern Territory' },
						{ value: 'SA',  	label: 'South Australia' },
						{ value: 'WA',  	label: 'Western Australia' }
					],
					priority: [
						{value: 'cheap', 	label: 'The cheapest insurance'},
						{value: 'tax', 		label: 'To save on tax'},
						{value: 'family', 	label: 'To have more kids'},
						{value: 'coverage', label: 'The best insurance'}
					]
				},
				pages: {
					policy: { 
						title: 'What best describes you?', 
						type: 'policy'
					},
					state: {
						title: 'Where are you from?',
						type: 'state',
					},
					priority: {
						title: 'What are you after?',
						type: 'priority'
					}
				}
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