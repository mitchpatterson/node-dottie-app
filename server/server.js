var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Drink} = require('./models/drink');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/drinks', (req, res) => {
	const drink = new Drink({
		name: req.body.name
	});

	drink.save().then((doc) => {
		res.send(doc);
	}, (err) => {
		res.status(400).send(err);
	});
});

app.get('/drinks', (req, res) => {
	Drink.find().then((drinks) => {
		res.send({drinks});
	}, (err) => {
		res.status(400).send(err);
	});
});

app.get('/drinks/:id', (req, res) => {
	const id = req.params.id;
	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}

	Drink.findById(id).then((drink) => {
		if (!drink) {
			return res.status(404).send();
		}
		res.send({drink});
	}).catch((e) => {
		res.status(400).send();
	});
	
});

app.listen(port, () => {
	console.log(`Started up at port ${port}`);
});

module.exports = {app};