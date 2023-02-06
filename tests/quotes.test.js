const request = require('supertest');
const app = require('../app');
const requestTest = request(app);
const QueryDB = require('../db/QueryDB');

beforeAll(async () => {
    await QueryDB.postUser({ name: "Gabriel", username: "Arquimidio", password: "12345"})
})

requestTest
    .get()
