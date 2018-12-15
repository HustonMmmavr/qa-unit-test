module.exports = class Calculator {
    // constructor() {}

    static compute(first, operator, second) {
        switch (operator) {
            case '+': return Calculator.add(first, second);
            case '-': return Calculator.add(first, second);
            case '*': return Calculator.add(first, second);
            case '/': return Calculator.add(first, second);
            default: return {
                data: null, 
                error: "Incorrect operator"
            }
        }
    }

    static add(first, second)  {
        return  {
            data: first + second,
            error: null
        }
    }
    
    static sub(first, second) {
        return {
            data: first - second,
            error: null
        }

    }
    
    static mul(first, second) {
        return {
            data: first * second,
            error: null
        }
    }

    static div(first, second) {
        if (parseFloat(second) == 0) {
            return {
                data: null,
                error: "Second operand is Zero! You cant divide by Zero!"
            }
            // throw new Error('Second operand is Zero! You cant divide by Zero!')
        }
        return {
            data:  first / second,
            error: null
        }
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

// export default Calculator;