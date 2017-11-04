var mongoose = require('mongoose');

const Drink = mongoose.model('Drink', {
	name: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	weather: {
		minTemp: Number,
		maxTemp: Number,
		season: String
	},
	ingredients: {
		type: Array
	},
	alcoholic: {
		type: Boolean
	}
});

module.exports = {Drink};