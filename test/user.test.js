const request = require("supertest");
const app = require("../src/app");

describe("GET /users", () => {
    it("respond with json containig a list of all products", (done) => {
        request(app)
            .get("/users")
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    });
});

describe("POST /users", () => {
    it("respond with json containig a product", (done) => {
        const data = {
            id_role: 1,
            name: "kim",
            last_name: "garces",
            nit: "1067935900",
            password: "kim",
            email: "kim@gmail.com"
        };
        request(app)
            .post("/users")
            .send(data)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200, done)
            .then((err) => {
                if (err) return done(err);
                done();
            });
    });
});

describe("PUT /users", () => {
    it("update of a product", (done) => {
        const data = {
            id_role: 2,
            name: "kim",
            last_name: "garces",
            nit: "1067935900",
            password: "kim",
            email: "kim@gmail.com"
        };
        request(app)
            .put("/users")
            .send(data)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200, done)
            .then((err) => {
                if (err) return done(err);
                done();
            });
    });
});

describe("DELETE /users", () => {
    it("remove a product", (done) => {
        request(app)
            .delete("/users/2")
            .expect(200, done)
            .then((err) => {
                if (err) return done(err);
                done();
            });
    });
});
