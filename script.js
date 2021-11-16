var num1 = false;
var num2 = false;
var sum = false;
var diff = false;
var product = false;
var quotient = false;
var expon = false;
var output = "0";
var numOne = "0";
var numTwo = "0";
document.getElementById("output").innerText = output;






function reset(){
    num1 = false;
    num2 = false;
    sum = false;
    diff = false;
    product = false;
    quotient = false;
    expon = false;
    output = "0";
    numOne = "0";
    numTwo = "0";
    document.getElementById("output").innerText = output;
}

function conCat(element) {
    if (output == "0" && num1 == false) {
        output = element.innerText;
        document.getElementById("output").innerText = output;
    }
    else if (output !== "0" & num1 == false) {
        output = output.concat(element.innerText);
        document.getElementById("output").innerText = output;
    }
    else if (output == "0" && num1 == true) {
            output = element.innerText;
            document.getElementById("output").innerText = output;
    }        
    else if(output !== "0" && num1 == true) {
        output = output.concat(element.innerText);
        document.getElementById("output").innerText = output;
    }   
} 

function transfer() {
    if(num1 == false){
        numOne = output;
        output = "0";
        num1 = true;
    }
    else if(num1 == true) {
        numTwo = output;
        output = "0";
        num2 = true;
    }
}

function calculate() {
    if(sum == true){
        output = parseFloat(numOne) + parseFloat(numTwo);
        sum = false;
    }
    else if(diff == true){
        output = parseFloat(numOne) - parseFloat(numTwo);
        diff = false;
    }
    else if(product == true) {
        output = parseFloat(numOne) * parseFloat(numTwo); 
        product = false;
    }
    else if(quotient == true) {
        output = parseFloat(numOne) / parseFloat(numTwo);
        quotient = false;
    }
    else if(expon == true) {
        output = parseFloat(numOne) ** parseFloat(numTwo);
    }
    output = output.toString();
    document.getElementById("output").innerText = Math.round(output * 100000) / 100000;
    numOne = output;
    output = "0";
    num2 = false;
}

function plus() {
    if(num1 == false){
        transfer();
        sum = true;
    }
    else if(num1 == true && num2 == false){
        transfer();
        calculate();
        sum = true;
    }
}

function minus() {
    if(num1 == false){
        transfer();
        diff = true;
    }
    else if(num1 == true && num2 == false){
        transfer();
        calculate();
        diff = true;
    }
}

function multiply() {
    if(num1 == false) {
        transfer();
        product = true;
    }
    else if(num1 == true && num2 == false){
        transfer();
        calculate();
        product = true;
    }    
}

function divide() {
    if(num1 == false){
        transfer();
        quotient = true;
    }
    else if(num1 == true && num2 == false) {
        transfer();
        calculate();
        quotient = true;
    }
}

function exp() {
    if(num1 == false) {
        transfer();
        expon = true;
    }
    else if(num1 == true && num2 == false) {
        transfer();
        calculate();
        expon = true;
    }
}

function equal(){
    if(num1 == true && num2 == false) {
        transfer();
        calculate();
        output = numOne;
        num2 = false;
        num1 = false;
    }
}
