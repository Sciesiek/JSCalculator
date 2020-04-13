var inputField = document.getElementById('input01');

function input(input){
    inputField.value += input;
}

function clearInput(){
    inputField.value = inputField.value.slice(0, -1);
}

function clearWholeInput(){
    inputField.value = '';
}

function calculates(){
    inputField.value = eval(inputField.value);
}

var extented = document.getElementsByClassName('extended')[0];

function extended(){
    extented.style.display = 'grid';
}

function standard(){
    extented.style.display = 'none';
}
