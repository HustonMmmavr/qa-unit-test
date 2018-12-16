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
    it('Ok Div two positive integers 3125 / 5 = 625', () => {
        assert.deepEqual(calculator.div(3125, 5), {data: 625, error: null})
    })

    it('Ok Div positive and negative integers 8 / -1 = -8', () => {
        assert.deepEqual(calculator.div(8, -1), {data: -8, error: null})
    })

    it('Ok Div two negative integers -8 / -2 = -4', () => {
        assert.deepEqual(calculator.div(-8, -2), {data: 4, error: null})
    })

    it('Ok div zero by integer and float 0 / 2 = 0', () => {
        assert.deepEqual(calculator.div(0, 2), {data: 0, error: null})
    })

    it('Ok div positive integer and float 1 / 0.5 = 2', () => {
        assert.deepEqual(calculator.div(1, 0.5), {data: 2, error: null})
    })

    it('Ok div positive integer and negative float 1 / -0.5 = -2', () => {
        assert.deepEqual(calculator.div(1, -0.5), {data: -2, error: null})
    })

    it('Ok div two positive floats  1.5 / 0.5 = 3', () => {
        assert.deepEqual(calculator.div(1.5, 0.5), {data: 3, error: null})
    })

    it('Ok div two negative floats -1.5 / -0.5 = 3', () => {
        assert.deepEqual(calculator.div(-1.5, -0.5), {data: 3, error: null})
    })

    it('Err divide by zero (0): 8 / 0', () => {
        assert.deepEqual(calculator.div(8, 0), {data: null, error: "Second operand is Zero! You cant divide by Zero!"})
    })

    it('Err divide by zero (0.0) float: 8 / 0', () => {
        assert.deepEqual(calculator.div(8, 0.0), {data: null, error: "Second operand is Zero! You cant divide by Zero!"})
    })
});

describe('Operand validation: ', () => {
    it('Ok validate positive integer', () => {
        assert.equal(calculator.isValidOperand(15), true)
    })
    
    it('Ok validate negative integer', () => {
        assert.equal(calculator.isValidOperand(-5), true)
    })

    it('Ok validate positive float', () => {
        assert.equal(calculator.isValidOperand(1.1), true)
    })
    
    it('Ok validate negative float', () => {
        assert.equal(calculator.isValidOperand(-1.1), true)
    })

    it('Ok validate 0 from string', () => {
        assert.equal(calculator.isValidOperand('0'), true)
    })

    it('Ok validate 0 from string', () => {
        assert.equal(calculator.isValidOperand('0.0'), true)
    })

    it('Err Validate string \'sdfdds\': ', () => {
        assert.equal(calculator.isValidOperand('sdfdds'), false)
    })

    it('Err Validate string \'10e\': ', () => {
        assert.equal(calculator.isValidOperand('10e'),false)
    })

    it('Err validate NaN: ', () => {
        assert.equal(calculator.isValidOperand(NaN), false)
    })
})

describe('Calculator method compute: ', () => {
    it('Ok add two positive integers 2000 + 1999 = 3999', () => {
        assert.deepEqual(calculator.compute(2000, '+', 1999), {data: 3999, error: null})
    })

    it('Ok sub two positive integers 2000 - 1999 = 1', () => {
        assert.deepEqual(calculator.compute(2000, '-', 1999), {data: 1, error: null})
    })

    it('Ok mul two positive integers 2000 * 1999 = 3998000', () => {
        assert.deepEqual(calculator.compute(2000, '*', 1999), {data: 3998000, error: null})
    })

    it('Ok div two positive integers 2000 / 2 = 1000', () => {
        assert.deepEqual(calculator.compute(2000, '/', 2), {data: 1000, error: null})
    })

    it('Err: Division by zero 2000 / 0: ', () => {
        assert.deepEqual(calculator.compute(2000, '/', 0), {data: null, error: "Second operand is Zero! You cant divide by Zero!"})
    })

    it('Err: Sended incorrect first operand = \'sdfd\': ', () => {
        assert.deepEqual(calculator.compute('sdfd', '+', 2), {data: null, error: "Incorrect first operand"})
    })

    it('Err: Sended incorrect second operand = Nan: ', () => {
        assert.deepEqual(calculator.compute(2, '+', NaN), {data: null, error: "Incorrect second operand"})
    })

    it ('Err: Sended incorrect operator = \'a\'', () => {
        assert.deepEqual(calculator.compute(2, 'a', 3), {data: null, error: "Incorrect operator"})
    })
});