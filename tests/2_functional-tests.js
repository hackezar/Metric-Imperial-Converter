const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {

    suite('Routing Tests', function() {

        suite('GET /api/convert => conversion object', function() {

            test('Convert 10L (valid input)', function(done) {
                chai.request(server)
                .get('/api/convert')
                .query({input: '10L'})
                .end(function(err, res){
                    assert.equal(res.status, 200);
                    assert.equal(res.body.initNum, 10);
                    assert.equal(res.body.initUnit, 'L');
                    assert.approximately(res.body.returnNum, 2.64172, 0.1);
                    assert.equal(res.body.returnUnit, 'gal');
                    done();
                });
            });

            test('Convert 32g (invalid input unit)', function(done) {
                chai.request(server)
                .get('/api/convert')
                .query({input: '32g'})
                .end(function(err, res){
                    assert.equal(res.status, 200);
                    assert.equal(res.body.initUnit, undefined);
                    done();
                })   
            });

            test('Convert an invalid number)', function(done) {
                chai.request(server)
                .get('/api/convert')
                .query({input: '3/7.2/4kg'})
                .end(function(err, res){
                    assert.equal(res.status, 200);
                    assert.equal(res.body.initNum, undefined);
                    done();
                });
            });
            
            test('Convert an invalid number AND unit)', function(done) {
                chai.request(server)
                .get('/api/convert')
                .query({input: '3/7.2/4kilomegagam'})
                .end(function(err, res){
                    assert.equal(res.status, 200);
                    assert.equal(res.body.initNum, undefined);
                    assert.equal(res.body.initUnit, undefined);
                    done();
                });
            });

            test('Convert with no number)', function(done) {
                chai.request(server)
                .get('/api/convert')
                .query({input: 'lbs'})
                .end(function(err, res){
                    assert.equal(res.status, 200);
                    assert.equal(res.body.initNum, 1);
                    assert.equal(res.body.initUnit, 'lbs');
                    assert.equal(res.body.returnUnit, 'kg');
                    done();
                });
            });
        })
    })


});
