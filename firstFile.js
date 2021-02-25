var customConsole = require('prompt-sync')();
// 1. �������� �������� � ������ �����
var operationsArgs = ['1: addition', '2: subtraction', '3: dividing', '4: multiplying'];
// 2. ���� FOR
for (var i = 0; i < operationsArgs.length; i++) {
    console.log(operationsArgs[i]);
}
;
var operation = customConsole("Please, enter the number of operation and press \"Enter\"\n");
var number1 = customConsole("Please enter the first number and press \"Enter\"\n ");
var number2 = customConsole("Please enter the second number and press \"Enter\"\n ");
var resultNames = ['addition', 'subtraction', 'dividing', 'multiplying'];
var resultName = resultNames[operation - 1];
// 3. �������, 4 ��.
function addition() {
    return +number1 + +number2;
}
;
function subtraction() {
    return number1 - number2;
}
;
function dividing() {
    return number1 / number2;
}
;
function multiplying() {
    return number1 * number2;
}
;
var result;
// 4. ������� IF
if (operation == 1) {
    result = addition();
}
else if (operation == 2) {
    result = subtraction();
}
else if (operation == 3) {
    result = dividing();
}
else if (operation == 4) {
    result = multiplying();
}
;
// 5. ���� WHILE
while (typeof (result) == 'number') {
    console.log("The result of the " + resultName + " is " + result);
    break;
}
;
