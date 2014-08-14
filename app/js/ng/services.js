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
					{name: 'Find your policy', description: 'Answer a few questions, get the perfect quote', state: 'find.age'},
					{name: 'Blog', description: 'Read our stuff', state: 'blog'},
					{name: 'About health.com.au', description: 'The story behind us', state: 'about'},
					{name: 'Join now', description: 'Just for preview', state: 'join.start'}
				]
			};
		}
	])

	.factory('BlogData', [
		function(){}
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
						{value: 'coverage', label: 'The best insurance'},
						{value: 'all', 		label: 'Just show me all products'}
					],
					age: [
						{value: '18-30', 		label: 'Under 31'},
						{value: '31-37', 		label: 'Between 31 and 38'},
						{value: '38-55', 		label: 'Between 38 and 55'},
						{value: '55-100', 		label: 'Older than 55'}
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
				}
			};
		}
	])

	.service('FindData', [
		function(){
			return {
				options: {
					age: [
						{value: '18-30', 		label: 'Under 31'},
						{value: '31-37', 		label: 'Between 31 and 38'},
						{value: '38-55', 		label: 'Between 38 and 55'},
						{value: '55-100', 		label: 'Older than 55'}
					],
					priority: [
						{value: 'cheap', 		label: 'The cheapest insurance'},
						{value: 'tax', 			label: 'To save on tax'},
						{value: 'family', 		label: 'To have more kids'},
						{value: 'coverage', 	label: 'The best insurance'},
						{value: 'all', 			label: 'Just show me all products'}
					],
					hospital: [
						{value: 'high', 		label: 'High hospital coverage', 			desc: 'For example, Prengancy Treatment, IVF, Prostheses'},
						{value: 'middle',		label: 'Heart and lung related coverage',  	desc: 'For example, Cardiothoracic therapy, Spinal fusions, etc'},
						{value: 'basic', 		label: 'Just the basics', 					desc: 'For example, Tonsils, Appendix, Adenoids, accidents'}
					],
					extras: [
						{value: 'high', 		label: 'The works', 						desc: 'You need all extras available'},
						{value: 'middle', 	label: 'Most of the extras', 				desc: 'Higher cost things like Speech Therapy, Psychology and Occupational Therapy'},
						{value: 'basic', 		label: 'Just the basics', 					desc: 'You only need things like massage, natural therapy and gym memberships'},
					],
					policy: [
						{ value: 'Sgl',   	label: 'Single' },
						{ value: 'Cpl',   	label: 'Couple' },
						{ value: 'Fam',   	label: 'Family' },
						{ value: 'SPFam', 	label: 'Single Parent' }
					],
					state: [
						{ value: 'NSW',			label: 'New South Wales' },
						{ value: 'VIC', 		label: 'Victoria' },
						{ value: 'QLD', 		label: 'Queensland' },
						{ value: 'TAS', 		label: 'Tasmania' },
						{ value: 'ACT', 		label: 'Australian Capital Territory' },
						{ value: 'NT',  		label: 'Northern Territory' },
						{ value: 'SA',  		label: 'South Australia' },
						{ value: 'WA',  		label: 'Western Australia' }
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
				}
			}
		}
	])

	.factory('Products', [
		function(){
			return {
				products: [
					{
						id: 1,
						name: 'Basic Hospital with Middle Extras',
						description: 'If children aren’t an issue any more, then Vitality 65 offers peace of mind with a wide range of hospital and extras benefits.',
						hospitals: [
							// { name: 'Cardiothoracic Services', slug: 'cardio', coverage: 'covered' },
							// { name: 'Treatment for accidents', slug: 'cardio', coverage: 'covered' },
							// { name: 'Appendix', slug: 'cardio', coverage: 'covered' },
							// { name: 'Tonsils', slug: 'cardio', coverage: 'covered' },
							// { name: 'Shoulder Reconstruction', slug: 'cardio', coverage: 'covered' },
							// { name: 'Knee Reconstruction', slug: 'cardio', coverage: 'covered' },
							// { name: 'Adenoids', slug: 'cardio', coverage: 'covered' },
							// { name: 'Palliative Care', slug: 'cardio', coverage: 'covered' },
							{ name: 'Psychiatric Services', slug: 'cardio', coverage: 'restricted' },
							{ name: 'Pregnancy Related Services', slug: 'cardio', coverage: 'none' },
							{ name: 'Joint replacement, including spine, with prostheses', slug: 'cardio', coverage: 'none' },
							{ name: 'Cataracts and eye lens procedures', slug: 'cardio', coverage: 'none' },
							{ name: 'Dialysis for Chronic Kidney Failure', slug: 'cardio', coverage: 'none' },
							{ name: 'Bariatric Surgery', slug: 'cardio', coverage: 'none' },
							{ name: 'Assisted Reproductive Services', slug: 'cardio', coverage: 'none' },
							{ name: 'Spinal Fusion', slug: 'cardio', coverage: 'none' },
							{ name: 'Podiatric Surgery', slug: 'cardio', coverage: 'none' },
							{ name: 'Sterility reversal', slug: 'cardio', coverage: 'none' },
							{ name: 'Services Medicare does not cover', slug: 'cardio', coverage: 'none' }
						],
						extras: [
							{ name: 'Dental', slug: 'dental', value: 750, isSublimit: false },
							{ name: 'General', slug: 'dental', value: '', isSublimit: true },
							{ name: 'Major', slug: 'dental', value: '', isSublimit: true },
							{ name: 'Orthodontics', slug: 'dental', value: 300, isSublimit: true },
							{ name: 'Optical', slug: 'dental', value: 200, isSublimit: false },
							{ name: 'Physio, Chiro and Osteopathy', slug: 'dental', value: 350, isSublimit: false },
							{ name: 'Natural Therapy', slug: 'dental', value: 250, isSublimit: false },
							{ name: 'Remedial Massage', slug: 'dental', value: 200, isSublimit: false },
							{ name: 'Non-PBS Prescriptions', slug: 'dental', value: 150, isSublimit: false },
							{ name: 'Psychology', slug: 'dental', value: 200, isSublimit: false },
							{ name: 'Occupational Therapy', slug: 'dental', value: 250, isSublimit: false },
							{ name: 'Speech Therapy', slug: 'dental', value: 200, isSublimit: false },
							{ name: 'Health Maintenance', slug: 'dental', value: 100, isSublimit: false }
						],
						options: {
							extra_back: ['65%', '75%', '85%'],
							excess: ['$0', '$250', '$500'],
							frequency: ['week', 'month', 'year']
						},
						prices: {
							65: {
								extra_value: 1234,
								rates: {
									0: {
										rate: {
											gross_premium: 1234.56,
											discounted_premium: 1000.56,
											hospital_excess: 1100.43,
										}
									},
									250: {
										rate: {
											gross_premium: 1100.56,
											discounted_premium: 990.56,
											hospital_excess: 1000.43,
										}
									},
									500: {
										rate: {
											gross_premium: 990.56,
											discounted_premium: 850.56,
											hospital_excess: 800.43,
										}
									}
								}
							},
							75: {
								extra_value: 1564,
								rates: {
									0: {
										rate: {
											gross_premium: 1233.56,
											discounted_premium: 2342.56,
											hospital_excess: 3433.43,
										}
									},
									250: {
										rate: {
											gross_premium: 4545.56,
											discounted_premium: 990.56,
											hospital_excess: 1000.43,
										}
									},
									500: {
										rate: {
											gross_premium: 3434.56,
											discounted_premium: 1233.56,
											hospital_excess: 1000.43,
										}
									}
								}
							},
							85: {
								extra_value: 2000,
								rates: {
									0: {
										rate: {
											gross_premium: 1233.56,
											discounted_premium: 2342.56,
											hospital_excess: 3433.43,
										}
									},
									250: {
										rate: {
											gross_premium: 4545.56,
											discounted_premium: 990.56,
											hospital_excess: 1000.43,
										}
									},
									500: {
										rate: {
											gross_premium: 3434.56,
											discounted_premium: 1233.56,
											hospital_excess: 1000.43,
										}
									}
								}
							}	
						}
					},
					{
						id: 2,
						name: 'High Hospital with Middle Extras',
						description: 'Total coverage for total piece of mind. If you\'re rich, this is for you.',
						hospitals: [
							// { name: 'Cardiothoracic Services', slug: 'cardio', coverage: 'covered' },
							// { name: 'Treatment for accidents', slug: 'cardio', coverage: 'covered' },
							// { name: 'Appendix', slug: 'cardio', coverage: 'covered' },
							// { name: 'Tonsils', slug: 'cardio', coverage: 'covered' },
							// { name: 'Shoulder Reconstruction', slug: 'cardio', coverage: 'covered' },
							// { name: 'Knee Reconstruction', slug: 'cardio', coverage: 'covered' },
							// { name: 'Adenoids', slug: 'cardio', coverage: 'covered' },
							// { name: 'Palliative Care', slug: 'cardio', coverage: 'covered' },
							{ name: 'Psychiatric Services', slug: 'cardio', coverage: 'restricted' },
							{ name: 'Pregnancy Related Services', slug: 'cardio', coverage: 'none' },
							{ name: 'Joint replacement, including spine, with prostheses', slug: 'cardio', coverage: 'none' },
							{ name: 'Cataracts and eye lens procedures', slug: 'cardio', coverage: 'none' },
							{ name: 'Dialysis for Chronic Kidney Failure', slug: 'cardio', coverage: 'none' },
							{ name: 'Bariatric Surgery', slug: 'cardio', coverage: 'none' },
							{ name: 'Assisted Reproductive Services', slug: 'cardio', coverage: 'none' },
							{ name: 'Spinal Fusion', slug: 'cardio', coverage: 'none' },
							{ name: 'Podiatric Surgery', slug: 'cardio', coverage: 'none' },
							{ name: 'Sterility reversal', slug: 'cardio', coverage: 'none' },
							{ name: 'Services Medicare does not cover', slug: 'cardio', coverage: 'none' }
						],
						extras: [
							{ name: 'Dental', slug: 'dental', value: 750, isSublimit: false },
							{ name: 'General', slug: 'dental', value: '', isSublimit: true },
							{ name: 'Major', slug: 'dental', value: '', isSublimit: true },
							{ name: 'Orthodontics', slug: 'dental', value: 300, isSublimit: true },
							{ name: 'Optical', slug: 'dental', value: 200, isSublimit: false },
							{ name: 'Physio, Chiro and Osteopathy', slug: 'dental', value: 350, isSublimit: false },
							{ name: 'Natural Therapy', slug: 'dental', value: 250, isSublimit: false },
							{ name: 'Remedial Massage', slug: 'dental', value: 200, isSublimit: false },
							{ name: 'Non-PBS Prescriptions', slug: 'dental', value: 150, isSublimit: false },
							{ name: 'Psychology', slug: 'dental', value: 200, isSublimit: false },
							{ name: 'Occupational Therapy', slug: 'dental', value: 250, isSublimit: false },
							{ name: 'Speech Therapy', slug: 'dental', value: 200, isSublimit: false },
							{ name: 'Health Maintenance', slug: 'dental', value: 100, isSublimit: false }
						],
						options: {
							extra_back: ['65%', '75%', '85%'],
							excess: ['$0', '$250', '$500'],
							frequency: ['week', 'month', 'year']
						},
						prices: {
							65: {
								extra_value: 1234,
								rates: {
									0: {
										rate: {
											gross_premium: 1234.56,
											discounted_premium: 1000.56,
											hospital_excess: 1100.43,
										}
									},
									250: {
										rate: {
											gross_premium: 1100.56,
											discounted_premium: 990.56,
											hospital_excess: 1000.43,
										}
									},
									500: {
										rate: {
											gross_premium: 990.56,
											discounted_premium: 850.56,
											hospital_excess: 800.43,
										}
									}
								}
							},
							75: {
								extra_value: 1564,
								rates: {
									0: {
										rate: {
											gross_premium: 1233.56,
											discounted_premium: 2342.56,
											hospital_excess: 3433.43,
										}
									},
									250: {
										rate: {
											gross_premium: 4545.56,
											discounted_premium: 990.56,
											hospital_excess: 1000.43,
										}
									},
									500: {
										rate: {
											gross_premium: 3434.56,
											discounted_premium: 1233.56,
											hospital_excess: 1000.43,
										}
									}
								}
							},
							85: {
								extra_value: 2000,
								rates: {
									0: {
										rate: {
											gross_premium: 1233.56,
											discounted_premium: 2342.56,
											hospital_excess: 3433.43,
										}
									},
									250: {
										rate: {
											gross_premium: 4545.56,
											discounted_premium: 990.56,
											hospital_excess: 1000.43,
										}
									},
									500: {
										rate: {
											gross_premium: 3434.56,
											discounted_premium: 1233.56,
											hospital_excess: 1000.43,
										}
									}
								}
							}	
						}
					}
				]
			};
		}
	])

	.service('GeoCode', [
		function(){}
	]);

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