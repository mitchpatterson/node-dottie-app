const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Drink} = require('./../models/drink');

const drinks = [{
	name: 'Pina Colata'
}, {
	name: 'Sherley temple'
}, {
	name: 'Rum and coke'
}];

beforeEach((done) => {
	Drink.remove({}).then(() => {
		Drink.insertMany(drinks);
	}).then(() => done());
});

describe('POST /drinks', () => {
	it('should create a new drink', (done) => {
		var name = 'Test drink name';

		request(app)
			.post('/drinks')
			.send({name})
			.expect(200)
			.expect((res) => {
				expect(res.body.name).toBe(name);
			})
			.end((err, res) => {
				if (err) {
					return done(err);
				}

				Drink.find({name}).then((drinks) => {
					expect(drinks.length).toBe(1);
					expect(drinks[0].name).toBe(name);
					done();
				}).catch((e) => done(e));
			});
	});

	it('should not create drink with invalid body data', (done) => {
		request(app)
			.post('/drinks')
			.send({})
			.expect(400)
			.end((err, res) => {
				if (err) {
					return done(err);
				}

				Drink.find().then((drinks) => {
					expect(drinks.length).toBe(3);
					done();
				}).catch((e) => done(e));
			})
	});
});

describe('GET /drinks', () => {
	it('should get all drinks', (done) => {
		request(app)
			.get('/drinks')
			.expect(200)
			.expect((res) => {
				expect(res.body.drinks.length).toBe(3);
		})
			.end(done);
	});
});
