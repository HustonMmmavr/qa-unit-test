class Calculator {

    static compute(first, operator, second) {
        if (!Calculator.isValidOperand(first))  {
            return {
                data: null,
                error: "Incorrect first operand"
            }
        }

        if (!Calculator.isValidOperand(second)) {
            return {
                data: null,
                error: "Incorrect second operand"
            }
        }

        switch (operator) {
            case '+': return Calculator.add(first, second);
            case '-': return Calculator.sub(first, second);
            case '*': return Calculator.mul(first, second);
            case '/': return Calculator.div(first, second);
            default: return {
                data: null, 
                error: "Incorrect operator"
            }
        }
    }

    static add(first, second)  {
        return  {
            data: (+first) + (+second),
            error: null
        }
    }
    
    static sub(first, second) {
        return {
            data: (+first) - (+second),
            error: null
        }

    }
    
    static mul(first, second) {
        return {
            data: (+first) * (+second),
            error: null
        }
    }

    static div(first, second) {
        if (parseFloat(second) == 0) {
            return {
                data: null,
                error: "Second operand is Zero! You cant divide by Zero!"
            }
        }
        return {
            data:  (+first) / (+second),
            error: null
        }
    }

    static isValidOperand(operand) {
        if (!isNaN(parseFloat(operand)) && isFinite(operand)) {
            return true;
        }
        return false;
    }
}

module.exports=Calculator;