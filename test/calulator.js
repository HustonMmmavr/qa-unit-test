const assert = require('assert')
const calculator = require('../calculator.js')

describe('Operation add: ', () => {
    it('Ok Add two positive integers 2 + 3 = 5', () => {
        assert.deepEqual(calculator.add(2, 3), {data: 5, error: null})
    })

    it('Ok Add  positive and negative integers 2 + (-3) = -1', () => {
        assert.deepEqual(calculator.add(2, -3), {data: -1, error: null})
    })

    it('Ok Add integer and float 2 + 3.1654 = 5.1654', () => {
        assert.deepEqual(calculator.add(2, 3.1654), {data: 5.1654, error: null})
    })

    it('Ok Add positive integer and negative float 2 + (-3.1654) = -1.1654', () => {
        assert.deepEqual(calculator.add(2, -3.1654), {data: -1.1654, error: null})
    })

    it('Ok add zero and positive float: 0 + 3.1654 = 3.1654', () => {
        assert.deepEqual(calculator.add(0, 3.1654), {data: 3.1654, error: null})
    })
});


describe('Operation sub: ', () => {
    it('Ok Sub two positive integers 2000 - 1999 = 1', () => {
        assert.deepEqual(calculator.sub(2000, 1999), {data: 1, error: null})
    })

    it('Ok Sub positive and negative integers 8 - (-3) = 11', () => {
        assert.deepEqual(calculator.sub(8, -3), {data: 11, error: null})
    })

    it('Ok Sub integer and float 1 - 0.1654 = 0.8346', () => {
        assert.deepEqual(calculator.sub(1, 0.1654), {data: 0.8346, error: null})
    })

    it('Ok Sub negative intger and negagtive float -1 - (-0.1654) = -0.8346', () => {
        assert.deepEqual(calculator.sub(-1, -0.1654), {data: -0.8346, error: null})
    })

    it('Ok Sub zero and positive float: 0 - 3.1654 = 3.1654', () => {
        assert.deepEqual(calculator.sub(0, 3.1654), {data: -3.1654, error: null})
    })
});

describe('Operation mul: ', () => {
    it('Ok Mul two positive integers 11 * 111 = 1121', () => {
        assert.deepEqual(calculator.mul(11, 111), {data: 1221, error: null})
    })

    it('Ok Mul integer and zero (integer) 11 * 0 = 0', () => {
        assert.deepEqual(calculator.mul(11, 0), {data: 0, error: null})
    })

    it('Ok Mul integer and zero (float) 11 * 0.0 = 0', () => {
        assert.deepEqual(calculator.mul(11, 0.0), {data: 0, error: null})
    })

    it('Ok Mul two positive and negative integers 12 * (-122) = -1464', () => {
        assert.deepEqual(calculator.mul(12, -122), {data: -1464, error: null})
    })

    it('Ok Mul positive integer and float 10 * 2.1 = 21', () => {
        assert.deepEqual(calculator.mul(10, 2.1), {data: 21, error: null})
    })

    it('Ok Mul two negative integers (-8) * (-3) = 24', () => {
        assert.deepEqual(calculator.mul(-8, -3), {data: 24, error: null})
    })

    it('Ok Mul positive integer and negative float 1 - 0.1654 = 0.8346', () => {
        assert.deepEqual(calculator.mul(1, -0.1654), {data: -0.1654, error: null})
    })
});

describe('Operation div: ', () => {
    it('Ok Sub two positive integers 2000 - 1999 = 1', () => {
        assert.deepEqual(calculator.sub(2000, 1999), {data: 1, error: null})
    })

    it('Ok Sub positive and negative integers 8 - (-3) = 11', () => {
        assert.deepEqual(calculator.sub(8, -3), {data: 11, error: null})
    })

    it('Ok Sub integer and float 1 - 0.1654 = 0.8346', () => {
        assert.deepEqual(calculator.sub(1, 0.1654), {data: 0.8346, error: null})
    })

    it('Ok Sub negative intger and negagtive float -1 - (-0.1654) = -0.8346', () => {
        assert.deepEqual(calculator.sub(-1, -0.1654), {data: -0.8346, error: null})
    })

    it('Ok Sub zero and positive float: 0 - 3.1654 = 3.1654', () => {
        assert.deepEqual(calculator.sub(0, 3.1654), {data: -3.1654, error: null})
    })
});

describe('Operand validation: ', () => {
    it('Ok validate positive integer', () => {
        assert.equal(calculator.sub(2000, 1999), {data: 1, error: null})
    })
    
    it('Ok validate negative integer', () => {
        assert.equal(calculator.sub(2000, 1999), {data: 1, error: null})
    })

    it('Ok validate positive float', () => {
        assert.equal(calculator.sub(2000, 1999), {data: 1, error: null})
    })
    
    it('Ok validate negative float', () => {
        assert.equal(calculator.sub(2000, 1999), {data: 1, error: null})
    })

    it('Ok validate 0', () => {
        assert.equal(calculator.isValidOperand('0'), {data: 1, error: null})
    })

    it('Err Validate string \'sdfdds\': ', () => {
        assert.equal(calculator.isValidOperand('sdfdds'), false)
    })

    it('Err Validate string \'10e\': ', () => {
        assert.equal(calculator.isValidOperand('10e'),false)
    })
})

describe('Calculator method compute: ', () => {
    it('Ok add two positive integers', () => {
        assert.deepEqual(calculator.sub(2000, 1999), {data: 1, error: null})
    })

    it('Ok sub two positive integers', () => {
        assert.deepEqual(calculator.sub(2000, 1999), {data: 1, error: null})
    })

    it('Ok mul two positive integers', () => {
        assert.deepEqual(calculator.sub(2000, 1999), {data: 1, error: null})
    })

    it('Ok div two positive integers', () => {
        assert.deepEqual(calculator.sub(2000, 1999), {data: 1, error: null})
    })

    it('Err: Division by zero 4 / 0: ', () => {
        assert.deepEqual(calculator.sub(2000, 1999), {data: 1, error: null})
    })

    it('Err: Sended incorrect operand (a): ', () => {

    })
});