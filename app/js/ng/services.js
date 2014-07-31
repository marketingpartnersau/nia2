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
				reasons: [
					{name: 'Reasons to switch', description: 'We cool. We love online. We nice.'},
					{name: 'We rock', description: 'We’re a new sort of health insurance, and we’ve got some of the best people in the business behind us.'},
					{name: 'We love online', description: 'We don’t want to send receipts in by snail mail, and we definitely don’t want to visit anyone’s shop to wait inline and fill out forms.'},
					{name: 'Customer service with a heart.', description: 'When you need to speak with someone, we are here for you.'}
				]
			};
		}
	])

	.factory('Testimonials', [
		function(){
			return {
				testimonials: [
					{name: 'Megan, QLD', description: 'Impressed with the level of service received so far and it\'s never difficult to make the phone call for assistance.'},
					{name: 'Lucy, NSW', description: 'I found the whole joining process really easy and hassle free! Just the way I like it.'},
					{name: 'Robyn, VIC', description: 'Many many thanks for your time and patience (over live chat assistance). I’m glad that I decided to join with your company, such pleasurable helpful people you are.'}
				]
			};
		}
	])

	.factory('Proof', [
		function(){
			return {
				awards: [],
				press: []
			};
		}
	])

	.factory('SiteData', [
		function(){
			return {
				menuItems: [
					{name: 'Home', slug: 'home', icon: 'fa-home', state: 'home'},
					{name: 'Why Us', slug: 'why-us', icon: 'fa-question-circle', state: 'why-us'},
					{name: 'Quote', slug: 'quote', icon: 'fa-search', state: 'quote.policy'},
					{name: 'Claim', slug: 'claim', icon: 'fa-user', state: 'customers'}
				],
				moreMenuItems: [
					{name: 'Customer Area', description: 'Everything you need', state: 'customers'},
					{name: 'Blog', description: 'Read our stuff', state: 'blog'},
					{name: '10 Second Quote', description: 'Swear to god!', state: 'quote2'},
					{name: 'Join now', description: 'Just for preview', state: 'join.start'}
				]
			};
		}
	])

	.factory('BlogData', [
		function(){}
	])

	.service('QuoteData2', [
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
					],
				},
				input: {}
			};
		}
	])

	.service('QuoteData', [
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
					],
					age: [
						{value: '18', 		label: 'Under 31'},
						{value: '31', 		label: 'Between 31 and 38'},
						{value: '38', 		label: 'Between 38 and 55'},
						{value: '55', 		label: 'Older than 55'}
					],
					income: {
						single: [
							{value: 'tier1', 	label: 'Less than $90k'},
							{value: 'tier2', 	label: 'Between $90k and $102k'},
							{value: 'tier3', 	label: 'Between $102k and $136k'},
							{value: 'tier4', 	label: 'More than $136k'}
						],
						house: [
							{value: 'tier1', 	label: 'Less than $180k'},
							{value: 'tier2', 	label: 'Between $180k and $204k'},
							{value: 'tier3', 	label: 'Between $204k and $272k'},
							{value: 'tier4', 	label: 'More than $272k'}
						]
					}
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
				},
				formData: {}
			};
		}
	])

	.factory('Products', [
		function(){
			return {
				products: [
					{"id": 46, "code": "V500V65", "code2": "V65", "name": "Vitality 65", "nicename": "Vitality65", "description": "If children aren’t an issue any more, then Vitality 65 offers peace of mind with a wide range of hospital and extras benefits.", "created_at": "2014-06-23 08:55:13", "updated_at": "2014-06-22 22:55:13", "slug": "vitality65", "nicename_slug": "vitality65"},
					{"id": 61,"sort": 53,"code": "CWHC250M65","code2": "HCM65","name": "HeartCare Hospital with Middle Extras 65","nicename": "","description": "HeartCare is perfect if you want the added safety of cover for your heart. And 65% back on a wide range of Extras at your choice of provider.","slug": "heartcarehospitalwithmiddleextras65","nicename_slug": ""},
					{"id":31,"status":"active","sort":97,"code":"H500H85","code2":"H85","name":"High Hospital with High Extras 85","nicename":"High85","description":"Peace of mind Hospital cover. And 85% back on a long list of Extras with your provider, not ours.","extra_back":85,"extras_value":5250,"excess":500,"age_min":25,"age_max":100,"comparable":"High","created_at":"2014-06-23 08:53:17","updated_at":"2014-06-22 22:53:17","type_slug":"","slug":"highhospitalwithhighextras85","nicename_slug":"high85"}
				]
			};
		}
	])

	.service('GeoCode', [
		function(){}
	])

	// .service('GeoCode' ['$http', '$q',
	// 	function($http, $q){
	// 		return {
	// 			address: function(address){
	// 				var encodedAddress = encodeURIComponent(address);
	// 				return $http.get( 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodedAddress )
	// 					.then(function(response){
	// 						if(typeof response.data === 'object'){
	// 							return response.data;
	// 						} else {
	// 							return $q.reject(response.data);
	// 						}
	// 					}, function(response){
	// 						return $q.reject(response.data);
	// 				});
	// 			},
	// 			reverse: function(lat,lng){
	// 				return $http.get( 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng )
	// 					.then(function(response){
	// 						if (typeof response.data === 'object'){
	// 							return response.data;
	// 						} else {
	// 							return $q.reject(response.data);
	// 						}
	// 					}, function(response){
	// 						return $q.reject(response.data);
	// 				});
	// 			}
	// 		}
	// 	}
	// ]);