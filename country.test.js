const chai = require("chai");

const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const server = require("./index");



// it("should create a country", (done) => {
//     const newCountry = {
//         "location" : "Europe",
//         "name" : "France",
//         "flag" : "Blue"
//         }
//     chai.request(server).post("/createCountries").send(newCountry).end((err, res) => {
//         chai.expect(err).to.be.null;
//         chai.expect(res.status).to.equal(201);
//         chai.expect(res.body).to.include(newCountry);
//         done(); 
//     })
// });


describe("country tests", () => {

    let testCountry;

    beforeEach(async () => {
        try {
            await countryModel.deleteMany({});
            testCountry = await countryModel.create({
                name: "France",
                flag: "Blue",
                location: "Europe"
            });
            testcountry = JSON.parse(JSON.stringify(testcountry));
            console.log();
        } catch(err) {
            console.error(err)
        }
    })



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

    it("should get a country", (done) => {
        chai.request(server).get("/getCountry/" + testCountry._id).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.include(testCountry);
            done(); 
        })
    });

    it("should get all ducks", (done) => {
        chai.request(server).get("/getAllCountries/").end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.deep.include(testCountry);
            done(); 
        })
    });
})