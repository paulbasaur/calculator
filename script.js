function add(expression) {
  const values = expression.split("+");
  return(Number(values[0]) + Number(values[1]));
}

function subtract(expression) {
  const values = expression.split("-");
  return(Number(values[0]) - Number(values[1]));
}

function multiply(expression) {
  const values = expression.split("X");
  return(Number(values[0]) * Number(values[1]));
}

function divide(expression) {
  const values = expression.split("/");
  return(Number(values[0]) / Number(values[1]));
}

function percent(num1) {
  return(num1 * 100);
}

function negate(num1) {
  return(num1 * -1);
}

function decimalCheck(input) {
  const operators = ["+", "-", "X", "/"];
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
  const operators = ["+", "-", "X", "/", "="];
  for (let operator of operators) {
    if (input == "" || input == "0" || input.slice(-1) == operator) {
      return "0."
    }
  }
  return(".");
}

function parseTrailingZeros(input){
  // TODO:
  // parse trailing zeros after decimal operator button is pressed
}

function appendOperator(input, button) {
  const operators = ["+", "-", "X", "/", "="];
  let prevInput = input.slice(-1);
  if (operators.includes(prevInput) || prevInput == ".") {
    return(input.slice(0, -1) + button);
  } else if (input == "") {
    return("0" + button);
  } else {
    return(input + button);
  }
}

function evaluateCheck(input, button) {
  const operators = ["+", "-", "X", "/"];
  let originalInput = input.slice(0, -1);
  for (let operator of operators) {
    if (originalInput.includes(operator)) {
      if (operator == "+") {
        return(add(originalInput) + button);
      } else if (operator == "-") {
        return(subtract(originalInput) + button);
      } else if (operator == "X") {
        return(multiply(originalInput) + button);
      } else if (operator == "/") {
        return(divide(originalInput) + button);
      }
    }
  }
  return(input);
}

function afterEquals(userInput, button) {
    let prevInput = userInput.slice(-1);
    if (prevInput == "=") {return button.textContent;}
    else {return userInput + button.textContent;}
}

function clearDisplay() {
  const display = document.querySelector("#display-numbers");
  display.textContent = "0";
}

function updateDisplay(userInput) {
  console.log(userInput);
  const display = document.querySelector("#display-numbers");
  const operators = ["+", "-", "X", "/", "="];
  let lastInput = userInput.slice(-1);
  if(lastInput == "=") {
    return(userInput.slice(0,-1))
  }
  let expressionValues = [];
  for (let operator of operators) {
    if (lastInput == operator) {
      return(userInput.slice(0, -1));
    } else if (userInput.includes(operator)) {
      expressionValues = userInput.split(operator);
      return(expressionValues[1]);
    }
  }
  return(userInput);
}

function updateInput(userInput, button) {
  buttonClass = button.className;
  let validInput = false;
  let inputUpdate = "";

  if (buttonClass.includes("number")) {
    return(afterEquals(userInput, button));
  } else if (buttonClass.includes("operator")) {
    validInput = true;
    inputUpdate = appendOperator(userInput, button.textContent);
    return (evaluateCheck(inputUpdate, button.textContent));
  } else if (buttonClass.includes("decimal")) {
    validInput = decimalCheck(userInput);
    if (validInput) {
      if (userInput.slice(-1) == "="){return "0.";}
      return (userInput + leadingZero(userInput))
    }
    return userInput;
  } else if (buttonClass.includes("equals")) {
    if(userInput.slice(0,-1).includes("=")) {return userInput.slice(0,-1)}
    return evaluateCheck(userInput, "=");
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
    userInput = updateInput(userInput, button);
    display.textContent = updateDisplay(userInput);
  });
});

operators.forEach((button) => {
  button.addEventListener('click', () => {
    userInput = updateInput(userInput, button);
    display.textContent = updateDisplay(userInput);
  });
});

decimal.addEventListener('click', () => {
  userInput = updateInput(userInput, decimal);
  display.textContent = updateDisplay(userInput);
});

equals.addEventListener('click', () => {
  userInput = updateInput(userInput + "=", equals);
  display.textContent = updateDisplay(userInput);
});

clear.addEventListener('click', () => {
  clearDisplay();
  userInput = "";
});

//colapse eventListeners into a function
//display size
//percent function
//negate function
//parseTrailingZeros function
