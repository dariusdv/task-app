const request = require('supertest');
const app = require('../src/app');

test('Should signup a new user', async () => {
	await request(app)
		.post('/users')
		.send({
			name: 'Andrew',
			email: 'email@example.com',
			password: 'pess12345'
		})
		.expect(201);
});
