var chai = require('chai'),
    chaiHttp = require('chai-http');
var expect = chai.expect;
var should = require('chai').should()
var url = 'http://localhost:3000'

chai.use(chaiHttp);


describe('GET REQUESTS', function () {
        it('Name and gender should not be empty', function () {
            chai.request(url)
                .get('/results')
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    expect(err).to.be.null;
                    expect(res.body[0].name.first).to.not.be.empty;
                    expect(res.body[0].name.last).to.not.be.empty;
                    expect(res.body[0].gender).to.not.be.empty;
                    expect(res.type).to.contain('application/json');
                    expect(res).to.be.json;
                });
        });
    

        it('City, country & street must not be empty', function () {
            chai.request(url)
                .get('/results')
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    expect(err).to.be.null;
                    expect(res.body[0].location.street).to.not.be.empty;
                    expect(res.body[0].location.city).to.not.be.empty;
                    expect(res.body[0].location.country).to.not.be.empty;
                })
        })

        it('username and password should not be empty', function () {
            chai.request(url)
                .get('/results')
                .end(function (err, res) {
                    let uuid = (res.body[0].login.uuid)
                    expect(res).to.have.status(200);
                    expect(err).to.be.null;
                    expect(res.body[0].login.username).to.not.be.empty;
                    expect(res.body[0].login.password).to.not.be.empty;
                    expect(res.body[0].login.uuid).to.not.be.empty;
                    expect(res.type).to.contain('application/json');
                    expect(res).to.be.json;
                    expect(uuid).should.be.a('Object')
                });
        });

});