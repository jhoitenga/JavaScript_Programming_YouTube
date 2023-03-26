let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sumEl = document.getElementById("sum-el");

function add() {
    console.log("add button clicked");
    let result = num1 + num2;
    sumEl.textContent = "Sum: " + result;
}

function subtract() {
    console.log("subtract button clicked");
    let result = num1 - num2;
    sumEl.textContent = "Sum: " + result;
}

function multiply() {
    console.log("multiply button clicked");
    let result = num1 * num2;
    sumEl.textContent = "Sum: " + result;
}

function divide() {
    console.log("divide button clicked");
    let result = num1 / num2;
    sumEl.textContent = "Sum: " + result;
}

