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

function clearDisplay() {
  const display = document.querySelector("#display-numbers");
  display.textContent = "0";
}

function updateDisplay(userInput) {
  const display = document.querySelector("#display-numbers");
  // const lastChar = Number(userInput.slice(-1));
  // if (isNaN(lastChar)) {
  //   console.log("last char is NaN!");
  // }
  display.textContent = userInput;
}

function isValidInput(userInput, button) {
  buttonClass = button.className;
  if (buttonClass.includes("number")) {
    console.log("you clicked a number!");
  } else if (buttonClass.includes("operator")) {
    console.log("you clicked an operator!");
  } else if (buttonClass.includes("decimal")) {
    console.log("you clicked decimal!");
  } else if (buttonClass.includes("equals")) {
    console.log("you clicked equals!");
  }
  // if valid
  return button.textContent;
  // if invalid return original userInput
}

clearDisplay();

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const decimal = document.querySelector("#decimal-button");
const equals = document.querySelector("#equals-button");
const clear = document.querySelector("#clear-button");
const display = document.querySelector("#display-numbers");

let userInput = "";

numbers.forEach((button) => {
  button.addEventListener('click', () => {
    userInput += isValidInput(userInput, button);
    updateDisplay(userInput);
  });
});

operators.forEach((button) => {
  button.addEventListener('click', () => {
    userInput += isValidInput(userInput, button);
    updateDisplay(userInput);
  });
});

decimal.addEventListener('click', () => {
  userInput += isValidInput(userInput, decimal);
  updateDisplay(userInput);
});

equals.addEventListener('click', () => {
  userInput += isValidInput(userInput, equals);
  updateDisplay(userInput);
});

clear.addEventListener('click', () => {
  clearDisplay();
  userInput = "";
});
