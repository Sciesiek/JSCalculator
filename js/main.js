var inputField = document.getElementById('input01');

function input(input){
    if(dotAlreadyUsedLastTime(input)){
        return ;
    }

    inputField.value += input;
}

function clearInput(){
    inputField.value = inputField.value.slice(0, -1);
}

function clearWholeInput(){
    inputField.value = '';
}

function calculate(){
    inputField.value = calculateCurrentValue();
}

function calculatePow(){
    if(isInputValueCalculable())
        inputField.value **= 2;
}

function calculateSquare(){
    if(isInputValueCalculable())
        inputField.value = Math.sqrt(inputField.value);
}

function calculateLn(){
    if(isInputValueCalculable())
        inputField.value = Math.log(inputField.value);
}

function calculateFactorial(){
    if(isInputValueCalculable())
        inputField.value = factorial(inputField.value);
}

function isInputValueCalculable(){
    calculate();
    if(isNaN(calculateCurrentValue())){
        return false;
    }else{
        return true;
    }
}

function calculateCurrentValue(){
    try{
        return eval(inputField.value);
    }catch(error){
        return "Wrong input!";
    }
}

function factorial(input){
    if(input > 170){
        return Infinity;
    }
    result = 1;
    for(let i = 1; i <= input; i++){
        result *= i; 
    }
    return result;
}

var extented = document.getElementsByClassName('extended')[0];

function extended(){
    extented.style.display = 'grid';
}

function standard(){
    extented.style.display = 'none';
}

function lastSign(){
    return inputField.value.slice(-1);
}

function dotAlreadyUsedLastTime(input){
    return lastSign() === '.' && input === lastSign();
}