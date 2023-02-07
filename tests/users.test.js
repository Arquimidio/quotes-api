const request = require('supertest');
const app = require('../app');
const requestTest = request(app);
let newUserId;

beforeAll(async () => {
    await requestTest
        .post('/user')
        .send({
            "name": "Or",
            "login": "Di",
            "password": "Nary"
        })
        .expect(201)
        .then(res => newUserId = JSON.parse(res.text))
})

describe("User CRUD operations work", () => {
    test("Should get the new user based on id with a 200 status code", async () => {
        await requestTest 
            .get(`/user/${newUserId.id}`)
            .expect(200)
    })

    test("Should return new user object with a 200 status code", async () => {
        await requestTest
            .post('/user')
            .send({
                "name": "TestUser",
                "login": "Oakley",
                "password": "I love oaktrees"
            })
            .expect(201)
            .then(res => expect('id' in JSON.parse(res.text)).toBe(true));
    })
})
