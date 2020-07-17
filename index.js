const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect
const baseUrl = "https://peaceful-chamber-65568.herokuapp.com"


chai.use(chaiHttp)

it('get all students', function (done) {
    chai.request(baseUrl)
        .get('/')
        .end(function (err, res) {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an("array");
            const student = res.body[0];
            expect(student).to.be.an("object");
            expect(student).to.have.property("firstname")
            expect(student).to.have.property("lastname")
            done();
        });
});