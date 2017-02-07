const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
    it('should devide by 15', function() {
        const normalCases = [
            {num: 30, expected:'fizz-buzz'},
            {num: 45, expected:'fizz-buzz'},
            {num: 60, expected:'fizz-buzz'}
       ];
       normalCases.forEach(function(input) {
        const answer = fizzBuzzer(input.num);
        answer.should.equal(input.expected);
       });
    });

    it('should devide by 5', function() {
        const normalCases = [
            {num: 10, expected:'buzz'},
            {num: 25, expected:'buzz'},
            {num: 40, expected:'buzz'}
       ];
       normalCases.forEach(function(input) {
        const answer = fizzBuzzer(input.num);
        answer.should.equal(input.expected)
       });
    });

    it('should devide by 3', function() {
        const normalCases = [
            {num: 3, expected:'fizz'},
            {num: 12, expected:'fizz'},
            {num: 18, expected:'fizz'}
       ];
       normalCases.forEach(function(input) {
        const answer = fizzBuzzer(input.num);
        answer.should.equal(input.expected)
       });
    });

    it('should raise error if args not numbers', function() {
        const badInputs = [
            ['a'],
            ['true'],
            ['hi']
        ];

        badInputs.forEach(function(input) {
            (function() {
                fizzBuzzer(input[0])
            }).should.throw(Error);
        });
    });
    
}); 