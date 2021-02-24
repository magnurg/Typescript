const customConsole = require('prompt-sync')();


let operation: number = customConsole(`Please, enter the number of operation:

Plus: 1
Minus: 2
Divide: 3
Multiply: 4

and press "Enter"
 `);
let number1: number = customConsole(`Please enter the first number and press "Enter"
 `);
let number2: number = customConsole(`Please enter the second number and press "Enter"
 `);
let result: number;
let resultNames: string[] = ['addition','subtraction','dividing','multiplying'];
let resultName: string = resultNames[operation-1];
 if(operation == 1){
        result = +number1 + +number2;
    }else if(operation == 2){
        result = number1 - number2;
    }else if(operation == 3){
        result = number1 / number2;
    }else if(operation == 4){
        result = number1 * number2;
    };
    console.log(`The result of the ${resultName} is ${result}`)
   