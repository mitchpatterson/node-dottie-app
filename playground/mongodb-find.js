const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/DottieApp';

MongoClient.connect(url, (err, db) => {
	if (err) {
		console.log('unable to connect to mongodb server');
	} else {
		console.log('connected to mongodb server');
	}

	db.collection('Drinks').find().toArray().then((res) => {
		console.log('Drinks:', JSON.stringify(res, undefined, 2));
	}, (err) => {
		console.log('unable to retrieve drink data');
	});

	// db.close();
});