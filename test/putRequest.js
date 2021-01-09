var chai = require('chai'),
    chaiHttp = require('chai-http');
var expect = chai.expect;
var should = require('chai').should()
var url = 'http://localhost:3000'

chai.use(chaiHttp);

describe('PUT REQUESTS', function () {
    it('Update title for id 36', function () {
        chai.request(url)
            .put('/data/36')
            .set('Content-Type', 'application/json')
            .send({

                "id": 36,
                "title": "Abdul updated this is new title",
                "dueDate": "2020-12-30T13:52:30.6211058+00:00",
                "completed": true
            })
            .end(function (err, res) {
                expect(res).to.have.status(200)
                expect(res.type).to.contain('application/json');
            })

    });

    it('Negative Scenario Wrong Endpoint Request', function () {
        chai.request(url)
            .put('/ata/36')
            .set('Content-Type', 'application/json')
            .send({

                "id": 36,
                "title": "Abdul updated this is new title",
                "dueDate": "2020-12-30T13:52:30.6211058+00:00",
                "completed": true
            })
            .end(function (err, res) {
                expect(res).to.have.status(404)
                expect(res.type).to.contain('application/json');
            })

    });

   
 })