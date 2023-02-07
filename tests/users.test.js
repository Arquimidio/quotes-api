const request = require('supertest');
const app = require('../app');
const requestTest = request(app);
const basicUser ={
    "name": "Or",
    "login": "Di",
    "password": "Nary"
} 
let newUserId;

beforeAll(async () => {
    await requestTest
        .post('/user')
        .send(basicUser)
        .expect(201)
        .then(res => newUserId = JSON.parse(res.text))
})

describe("User CRUD operations work", () => {
    test("Should get the new user based on id with a 200 status code", async () => {
        await requestTest 
            .get(`/user/${newUserId.id}`)
            .expect(200)
    })

    test("Should post new user with a 200 status code", async () => {
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

    test("Should update user with a 200 status code", async () => {
        const updatedUser = {...basicUser, name: "iWasUpdated"};

        await requestTest
            .put(`/user/${newUserId.id}`)
            .send(updatedUser)
            .expect(200)
    })

    test("Should delete user with a 204 status code", async () => {
        await requestTest
            .delete(`/user/${newUserId.id}`)
            .expect(204)
    })
})
