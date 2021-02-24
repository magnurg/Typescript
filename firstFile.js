var customConsole = require('prompt-sync')();
var operation = customConsole("Please, enter the number of operation:\n\nPlus: 1\nMinus: 2\nDivide: 3\nMultiply: 4\n\nand press \"Enter\"\n ");
var number1 = customConsole("Please enter the first number and press \"Enter\"\n ");
var number2 = customConsole("Please enter the second number and press \"Enter\"\n ");
var result;
var resultNames = ['addition', 'subtraction', 'dividing', 'multiplying'];
var resultName = resultNames[operation - 1];
if (operation == 1) {
    result = +number1 + +number2;
}
else if (operation == 2) {
    result = number1 - number2;
}
else if (operation == 3) {
    result = number1 / number2;
}
else if (operation == 4) {
    result = number1 * number2;
}
;
console.log("The result of the " + resultName + " is " + result);
