const request = require("supertest");
const app = require("../src/app");

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbXVlbGRhdmlkbkBob3RtYWlsLmNvbSIsImV4cGlyZXNJbiI6IjFoIiwiaWF0IjoxNjQyNzI3NTE4fQ.2pyoGqPUmiH9wfWtK6YZ5KvXbBsk7_dfqWUe2MzeHf4'

describe("GET /products", () => {
    it("respond with json containig a list of all products", (done) => {
        request(app)
            .get("/products")
            .expect('Content-Type','text/html; charset=UTF-8')
            .expect(301, done)
    });
});

describe("POST /products", () => {
    it("respond with json containig a product", (done) => {
        const data = {
            name: "producto prueba",
            description: "esta es una descripcion de prueba",
            price: 123
        };
        request(app)
            .post("/products")
            .set('Authorization', token)
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

describe("PUT /products", () => {
    it("update of a product", (done) => {
        const data = {
            name: "producto",
            description: "esta es una descripcion",
            price: 123
        };
        request(app)
            .put("/products/7")
            .set('Authorization', token)
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

describe("DELETE /products", () => {
    it("remove a product", (done) => {
        request(app)
            .delete("/products/8")
            .set('Authorization', token)
            .expect(200, done)
            .then((err) => {
                if (err) return done(err);
                done();
            });
    });
});
