const display = document.querySelector("#display-numbers");
display.textContent = "0";

let displayUpdate = "";
const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    displayUpdate += button.textContent;
    display.textContent = displayUpdate;
  });
});

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    alert(button.textContent);
  });
});
