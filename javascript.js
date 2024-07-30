function add(number1, number2){
    alert(number1 + number2);
}

function subtract(number1, number2){
    alert(number1 - number2);
}

function multiply(number1, number2){
    alert(number1 * number2);
}

function divide(number1, number2){
    alert(number1 / number2);
}

function operate(oper , num1, num2){
    newval1 = parseInt(num1);
    newval2 = parseInt(num2);
    switch (oper) {
        
        case '+':
            add(newval1, newval2);
            break;

        case '-':
            subtract(newval1, newval2);
            break;

        case '*':
            multiply(newval1, newval2);
            break;

        case '/':
            divide(newval1, newval2);
            break;
        
        default: alert('invalid operator');
    }
}

let firstNum;
let operator;
let secondNum;

firstNum = prompt('choose first number');
operator = prompt('choose operator');
secondNum = prompt('choose second number');

operate(operator,firstNum,secondNum);