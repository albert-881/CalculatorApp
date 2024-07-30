let finalResult;
function cle(){
    firstNum = '';
    secondNum = '';
    dis.innerHTML = '';
    operator = '';
    isOperatorClicked = false;

}
function add(number1, number2){
    dis.innerHTML = '';
    finalResult = number1 + number2;
    dis.innerHTML = `${finalResult}`
    isOperatorClicked = false;
    firstNum = '';
    secondNum = '';
    operator = '';
}

function subtract(number1, number2){
    dis.innerHTML = '';
    finalResult = number1 - number2;
    dis.innerHTML = `${finalResult}`
    isOperatorClicked = false;
    firstNum = '';
    secondNum = '';
    operator = '';
}

function multiply(number1, number2){
    dis.innerHTML = '';
    finalResult = number1 * number2;
    dis.innerHTML = `${finalResult}`
    isOperatorClicked = false;
    firstNum = '';
    secondNum = '';
    operator = '';
}

function divide(number1, number2){
    dis.innerHTML = '';
    finalResult = number1 / number2;
    if (number2 == 0){
        alert('connot divide by 0');
        cle();
    }
    else{
    dis.innerHTML = `${finalResult}`
    isOperatorClicked = false;
    firstNum = '';
    secondNum = '';
    operator = '';
    }
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

let firstNum = '';
let operator = '';
let secondNum = '';
let result = '';
let isOperatorClicked = false;

//firstNum = prompt('choose first number');
//operator = prompt('choose operator');
//secondNum = prompt('choose second number');

//operate(operator,firstNum,secondNum);

const digits = document.querySelector('.digitButt');

const dis = document.querySelector('.display');
dis.innerHTML = '0';

digits.addEventListener('click', (e) => {
    if(!isOperatorClicked){
        
        firstNum += e.target.id
        dis.innerHTML= firstNum;
        
    }
    else{
        secondNum += e.target.id
        dis.innerHTML = `${firstNum}${operator}${secondNum}`
    }
    
    
});

const oper = document.querySelector('.operator');

oper.addEventListener('click', (e) => {
    if (firstNum !== '') {
        operator = e.target.id;
        isOperatorClicked = true;
        dis.innerHTML = `${firstNum}${operator}`;
    }
    
})

const equals = document.querySelector('.equals');

equals.addEventListener('click', (e) => {
    if (firstNum !== '' && secondNum !== '' && operator !== ''){
    operate(operator, firstNum, secondNum);
    }
    else{
        alert('you need to make sure you enter two numbers and an operator before using the equals sign');
    }
})

const clear = document.querySelector('.clear');

clear.addEventListener('click', (e) => {
    dis.innerHTML = '';
    firstNum = '';
    secondNum = '';
    operator = '';
    isOperatorClicked = false;
})
