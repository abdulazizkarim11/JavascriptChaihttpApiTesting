var chai = require('chai'),
    chaiHttp = require('chai-http');
var expect = chai.expect;
var should = require('chai').should()
var url = 'http://localhost:3000'

chai.use(chaiHttp);

////// DELETE REQUEST////////
///IN THIS REQUEST WE ARE USING TO POST CALL ND FOLLOWED BY DELETE CALL TO DELETE THE TITLE ID
describe('POST FOLLOWED BY DELETE REQUEST TITLE ID 34', function () {
    before(function () {
        return chai.request(url)
            .post('/data')
            .send({
                "id": 34,
                "title": "Activity 34",
                "Author": "John Smith",
                "dueDate": "2020-12-30T13:52:30.6211058+00:00",
                "completed": true
            })
    })
    it('delete request title id 34', function () {
        chai.request(url)
            .del('/data/34')
            .end(function (err, res) {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).to.be.empty
            })

    })
    it('Negative Scenario wrong URL requested', function() {
        chai.request(url)
        .del('/ata/34')
        .end(function(err,res){
            expect(err).to.be.null
            expect(res).to.have.status(404)
        })
    })

})


//// I Understood and learned hooks through using this method
/// If you comment out the code above and uncomment the code below
/// You would understand how hooks work. The before hook would run 
/// before the test is actually run. The script below will first run the describe hooks 
/// And then it will log out the number 10, then it will log out the number 4 and finally run the 
/// test and log out number 5.

// describe('hooks', function() {
//   console.log('10');
//   before(function() {
//     console.log('4');
//   });

//   it('description', function() {
//     console.log('5');
//     // nothing more here but still a test
//   })
// })