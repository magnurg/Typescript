const customConsole = require('prompt-sync')();
// 1. Названия операций в масиве строк
let operationsArgs: string[] = ['1: addition','2: subtraction','3: dividing','4: multiplying'];
// 2. Цикл FOR
for (let i = 0; i < operationsArgs.length; i++) {
        console.log(operationsArgs[i]);
    };
let operation: number = customConsole(`Please, enter the number of operation and press "Enter"
`);
 
let number1: number = customConsole(`Please enter the first number and press "Enter"
 `);
let number2: number = customConsole(`Please enter the second number and press "Enter"
 `);
let resultNames: string[] = ['addition','subtraction','dividing','multiplying'];
let resultName: string = resultNames[operation-1];
// 3. Функции, 4 шт.
function addition() {
    return +number1 + +number2
    };
function subtraction() {
    return number1 - number2
    };
function dividing() {
    return number1 / number2
    };
function multiplying() {
    return number1 * number2
    };

let result: number;
// 4. Условия IF
if(operation == 1){
        result = addition();
    }else if(operation == 2){
        result = subtraction();
    }else if(operation == 3){
        result = dividing();
    }else if(operation == 4){
        result = multiplying();
    };
// 5. Цикл WHILE
while(typeof(result) == 'number') {
    console.log(`The result of the ${resultName} is ${result}`)
    break
    };
