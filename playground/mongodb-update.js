const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017/DottieApp';

MongoClient.connect(url, (err, db) => {
	if (err) {
		console.log('unable to connect to mongodb server');
	} else {
		console.log('connected to mongodb server');
	}

	db.collection('Drinks').findOneAndUpdate({
		_id: new ObjectID('testId')
	}, {
		$set: {
			name: 'Another drink name'
		}
	}, {
		returnOrginal: false
	}).then((result) => {
		console.log(result);
	});

	// db.close();
});