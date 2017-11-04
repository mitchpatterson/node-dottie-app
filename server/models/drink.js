var mongoose = require('mongoose');

const Drink = mongoose.model('Drink', {
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	weather: {
		minTemp: {
			type: Number,
			required: true
		},
		maxTemp: {
			type: Number,
			required: true
		},
		season: String,
		conditions: [{type: String}]
	},
	ingredients: {
		type: Array,
		required: true
	},
	instructions: {
		type: [{type: String}],
		required: true
	},
	alcoholic: {
		type: Boolean,
		required: true
	}
});

module.exports = {Drink};