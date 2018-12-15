const Calculator = require('./calculator.js');
// import {Calculator} from './calculator'
const readline = require('readline');


const readerWriter = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// readerWriter.write("Welcome to calculator").then(() => {
console.log("Welcome to calculator")
readerWriter.question("Input first operand: ", (first) => {
    readerWriter.question("Input operator (+, -, /, *): ", (operator) => {
        readerWriter.question("Input second operand: ", (second) => {
            if (Calculator.isValidOperand(first)) {
                if (Calculator.isValidOperand(second)) {
                    if (Calculator.isValidOperator(operator)) {
                        res = Calculator.add(1, 2)
                        console.log(res)
                    } else {
                        console.log("hellp")
                    }
                } else {
                    readerWriter.write("Incorrect")
                }
            }
        });
    });
});
// });