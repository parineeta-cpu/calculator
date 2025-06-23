let display= document.querySelector('#display');
function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value='';
}
function calculate(){
display.value=eval(display.value);
}
function deleteLast(){
    display.value=display.value.slice(0,-1);
}