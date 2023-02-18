let num1 = Number(prompt("Enter first number"));

let operation = prompt ("Enter operation");

let num2 = Number(prompt("Enter second number"));

let result = 0;
if (operation == "+") {
  result = num1 + num2;
} else if (operation == "-") {
  result = num1 - num2;
} else if (operation == "*") {
  result = num1 * num2;
} else if (operation == "/") {
  result = num1 / num2;
}

console.log(result);
