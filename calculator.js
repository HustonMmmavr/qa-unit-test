class Calculator {
    // constructor() {}

    static add(first, second)  {
        return first + second
    }
    
    static sub(first, second) {
        return first - second
    }
    
    static mul(first, second) {
        return first * second
    }

    static div(first, second) {
        if (parseFloat(second) == 0) {
            throw new Error('Second operand is Zero! You cant divide by Zero!')
        }
        return first / second
    }

    static isValidOperand(operand) {
        if (!isNaN(parseFloat(operand)) && isFinite(operand)) {
            return true;
        }
        return false;
    }

    static isValidOperator(operator) {
        const operators = ['+', '-', '*', '/'];
        if (operators.indexOf(operator) < 0) {
            return false;
        }
        return true;
    }
}

export default Calculator;