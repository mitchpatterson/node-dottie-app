const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/DottieApp';

MongoClient.connect(url, (err, db) => {
	if (err) {
		console.log('unable to connect to mongodb server');
	} else {
		console.log('connected to mongodb server');
	}

	db.collection('Drinks').insertOne({
		name: 'Pina Colota',
		recipe: [{ingredients: ['ingred1', 'ingred2'], baseAlcohol: 'Rum'}],
		tempRange: {
			min: 25,
			max: 40
		}
	}, (error, result) => {
		if (error) {
			console.log('Error creating new recipe', error);
		} else {
			console.log(JSON.stringify(result.ops));
		}
	});

	db.close();
});