const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    suite('Function convertHandler.getNum(input)', function() {

        test('Whole number input', function(done) {
            let input = '32L';
            assert.equal(convertHandler.getNum(input), 32);
            done();
        });

        test('Fractional Input', function(done) {
            let input = '1/32L';
            assert.equal(convertHandler.getNum(input), 1/32);
            done();
        });

        test('Fractional Input w/ decimal', function(done) {
            let input = '1.2/32L';
            assert.equal(convertHandler.getNum(input), 1.2/32);
            done();
        });

        test('Invalid Input (double fraction)', function(done) {
            let input = '1/2/32L';
            assert.equal(convertHandler.getNum(input), undefined);
            done();
        });

        test('No Numerical Input', function(done) {
            let input = 'L';
            assert.equal(convertHandler.getNum(input), 1);
            done();
        });
    });
    suite("Function convertHandler.getUnit(input)", function () {
        test("For Each Valid Unit Inputs", function (done) {
            let input = [
                "gal",
                "l",
                "mi",
                "km",
                "lbs",
                "kg",
                "GAL",
                "L",
                "MI",
                "KM",
                "LBS",
                "KG",
            ];
            let output = [
                "gal",
                "L",
                "mi",
                "km",
                "lbs",
                "kg",
                "gal",
                "L",
                "mi",
                "km",
                "lbs",
                "kg",
            ];
             input.forEach(function (ele, index) {
                assert.equal(convertHandler.getUnit(ele), output[index]);
             });
             done();
            });
            });

        test("Unknown Unit Input", function (done) {
            assert.equal(convertHandler.getUnit("34kilograms"), undefined);
            done();
            });
        

    suite("Function convertHandler.getReturnUnit(initUnit)", function () {
        test("For Each Valid Unit Inputs", function (done) {
            let input = ["gal", "l", "mi", "km", "lbs", "kg"];
            let expect = ["L", "gal", "km", "mi", "kg", "lbs"];
            input.forEach(function (ele, i) {
                assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
            });
            done();
        });

        test("Convert gal to L", function (done) {
            let input = 'gal';
            assert.equal(convertHandler.getReturnUnit(input), 'L');
            done();
        })

        test("Convert L to gal", function (done) {
            let input = 'L';
            assert.equal(convertHandler.getReturnUnit(input), 'gal');
            done();
        })

        test("Convert mi to km", function (done) {
            let input = 'mi';
            assert.equal(convertHandler.getReturnUnit(input), 'km');
            done();
        })

        test("Convert km to mi", function (done) {
            let input = 'km';
            assert.equal(convertHandler.getReturnUnit(input), 'mi');
            done();
        })

        test("Convert lbs to kg", function (done) {
            let input = 'lbs';
            assert.equal(convertHandler.getReturnUnit(input), 'kg');
            done();
        })

        test("Convert kg to lbs", function (done) {
            let input = 'kg';
            assert.equal(convertHandler.getReturnUnit(input), 'lbs');
            done();
        })

        test("Convert kg to lbs", function (done) {
            let input = 'kg';
            assert.equal(convertHandler.getReturnUnit(input), 'lbs');
            done();
        })
        
    });
    suite("Function convertHandler.spellOutUnit(initUnit)", function () {
        test("Return spelled out string", function (done) {
            let input = ["gal", "l", "mi", "km", "lbs", "kg"];
            let expect = ["gallons", "liters", "miles", "kilometers", "pounds", "kilograms"];
            input.forEach(function (ele, i) {
                assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
            });
            done();
        });
    });  
 });
