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

function decimalCheck(input) {
  const operators = ["+", "-", "*", "/"];
  for (let operator of operators) {
    if (input.includes(operator)){
      const opIndex = input.indexOf(operator);
      const slicedInput = input.slice(opIndex+1);
      if (slicedInput.includes(".")) {return(false);}
      return(true);
    }
  }
  if (input.includes(".")) {return(false);}
  return(true);
}

function leadingZero(input){
  const operators = ["+", "-", "*", "/"];
  for (let operator of operators) {
    if (input == "" || input == "0" || input.slice(-1) == operator) {
      return "0."
    } else {
      return(".");
    }
  }
  return(input);
}

function parseTrailingZeros(input){
  // TODO:
  // parse trailing zeros after decimal operator button is pressed
}

function clearDisplay() {
  const display = document.querySelector("#display-numbers");
  display.textContent = "0";
}

function updateDisplay(userInput) {
  const display = document.querySelector("#display-numbers");
  display.textContent = userInput;
}

function isValidInput(userInput, button) {
  buttonClass = button.className;
  let validInput = false;

  if (buttonClass.includes("number")) {
    validInput = true;
  } else if (buttonClass.includes("operator")) {
    validInput = true;
  } else if (buttonClass.includes("decimal")) {
    validInput = decimalCheck(userInput);
    if (validInput) {return(userInput+leadingZero(userInput))}
  } else if (buttonClass.includes("equals")) {
    validInput = false;
  }

  if (validInput) {
    return userInput + button.textContent;
  } else {
    return userInput;
  }
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
    userInput = isValidInput(userInput, button);
    updateDisplay(userInput);
  });
});

operators.forEach((button) => {
  button.addEventListener('click', () => {
    userInput = isValidInput(userInput, button);
    updateDisplay(userInput);
  });
});

decimal.addEventListener('click', () => {
  userInput = isValidInput(userInput, decimal);
  updateDisplay(userInput);
});

equals.addEventListener('click', () => {
  userInput = isValidInput(userInput, equals);
  updateDisplay(userInput);
});

clear.addEventListener('click', () => {
  clearDisplay();
  userInput = "";
});
