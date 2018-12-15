// const calculator = require('./calculator.js');
import {Calculator} from './calculator'
const readline = require('readline');


const readerWriter = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readerWriter.write("Welcome to calculator");

readerWriter.question("Input first operand: ", (first) => {
    readerWriter.question("Input operator (+, -, /, *): ", (operator) => {
        readerWriter.question("Input second operand: ", (second) => {
            if (Calculator.isValidOperand(first)) {
                if (Calculator.isValidOperand(second)) {
                    if (Calculator.isValidOperator(operator)) {
                        Calculator.add(1, 2)
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