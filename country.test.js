const chai = require("chai");

const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const server = require("./index");



it("should create a country", (done) => {
    const newCountry = {
        "location" : "Europe",
        "name" : "France",
        "flag" : "Blue"
        }
    chai.request(server).post("/createCountries").send(newCountry).end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(201);
        chai.expect(res.body).to.include(newCountry);
        done(); 
    })
});

