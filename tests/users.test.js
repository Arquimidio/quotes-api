const request = require('supertest');
const app = require('../app');
const requestTest = request(app);

describe("User CRUD operations work", () => {
    test("Should return new user object with a 200 status code", async () => {
        await requestTest
            .post('/user')
            .send({
                "name": "TestUser",
                "login": "Oakley",
                "password": "I love oaktrees"
            })
            .expect(200)
            .expect({ success: true })
    })
})
