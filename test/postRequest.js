var chai = require('chai'),
    chaiHttp = require('chai-http');
var expect = chai.expect;
var should = require('chai').should()
var url = 'http://localhost:3000'

chai.use(chaiHttp);

describe('POST REQUESTS', function () {
    before(function () {
        return chai.request(url)
            .del('/data/45')
    })

    it('POST ID 45', function () {
        chai.request(url)
            .post('/data')
            .set('Content-Type', 'application/json')
            .send({
                "id": 45,
                "title": "Activity 42",
                "Author": "John Smith",
                "dueDate": "2020-12-30T13:52:30.6211058+00:00",
                "completed": true
            })
            .end(function (err, res) {
                expect(res).to.have.status(201);
                expect(err).to.be.null;
                expect(res.type).to.include('application/json')

            })
    });

    it('Negative Scenario missing endpoint', function () {
        chai.request(url)
            .post('/')
            .set('Content-Type', 'application/json')
            .send({
                "id": 45,
                "title": "Activity 42",
                "dueDate": "2020-12-30T13:52:30.6211058+00:00",
                "completed": true
            })
            .end(function (err, res) {
                expect(res).to.have.status(404)
                expect(err).to.be.null;
                expect(res.type).to.include('application/json')
            })
    }) 
    
})