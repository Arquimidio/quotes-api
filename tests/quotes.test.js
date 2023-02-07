const request = require('supertest');
const app = require('../app');
const requestTest = request(app);
const basicQuote = {
  authorId: 2,
  quote: "Machines take me by surprise with great frequency"
}
let newQuoteId;

beforeAll(async () => {
  const response = await requestTest
    .post('/quotes')
    .send(basicQuote)
    .expect(201)
  newQuoteId = JSON.parse(response.text).id;
})

describe("CRUD operations are successful", () => {
  test("Gets all quotes with status 200", async () => {
    await requestTest
      .get('/quotes')
      .expect(200)
  })

  test("Updates quote with status 204", async () => {
    await requestTest
      .put(`/quotes/${newQuoteId}`)
      .send({ quote: 'This quote has been updated :)'})
      .expect(204)
  })

  test("Deletes a quote with status 204", async () => {
    await requestTest
      .delete(`/quotes/${newQuoteId}`)
      .expect(204)
  })
})