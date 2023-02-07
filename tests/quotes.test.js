const request = require('supertest');
const app = require('../app');
const requestTest = request(app);
const basicQuote = {
  authorId: 1,
  quote: "Machines take me by surprise with great frequency"
}

beforeAll(async () => {
  await requestTest
    .post('/quotes')
    .send(basicQuote)
    .expect(201)
})

describe("CRUD operations are successful", () => {
  test("Gets all quotes with status 200", async () => {
    await requestTest
      .get('/quotes')
      .expect(200)
  })
})