function add(num1, num2) {
  return(num1 + num2);
}

function subtract(num1, num2) {
  return(num1 - num2);
}

function multiply(num1, num2) {
  return(num1 * num2);
}

function divide(num1, num2) {
  return(num1 / num2);
}

function percent(num1) {
  return(num1 * 100);
}

function negate(num1) {
  return(num1 * -1);
}

function equals(expressionStr) {
  //TODO
}

function updateDisplay() {
  //TODO
}

function getExpression() {
  // TODO
}

function clearDisplay() {
  const display = document.querySelector("#display-numbers");
  display.textContent = "0";
}

clearDisplay();

const display = document.querySelector("#display-numbers");
let displayUpdate = "";
const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    displayUpdate += button.textContent;
    display.textContent = displayUpdate;
  });
});

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener('click', clearDisplay);
