const Calculator = require('./calculator.js');
const readline = require('readline');


const readerWriter = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log("Welcome to calculator")

readerWriter.question("Input first operand: ", (first) => {
    readerWriter.question("Input operator (+, -, /, *): ", (operator) => {
        readerWriter.question("Input second operand: ", (second) => {
            const res = Calculator.compute(first, operator, second);
            if (res.error != null) {
                console.log(res.error)
            } else {
                console.log("Result of equation ", first, operator, second, " = ", res.data)
            }
            readerWriter.close()
        });
    });
})