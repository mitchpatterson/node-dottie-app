const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/DottieApp';

MongoClient.connect(url, (err, db) => {
	if (err) {
		console.log('unable to connect to mongodb server');
	} else {
		console.log('connected to mongodb server');
	}

	// deleteMany
	// db.collection('Drinks').deleteMany({name: 'Pina Colota'}).then((result) => {
	// 	console.log(result);
	// });

	// deleteOne
	// db.collection('Drinks').deleteOne({name: 'Pina Colota'}).then((result) => {
	// 	console.log(result);
	// });

	// findOneAndDelete
	db.collection('Drinks').findOneAndDelete({name: 'Pina Colota'}).then((result) => {
		console.log(result);
	});

	// db.close();
});