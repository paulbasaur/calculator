const display = document.querySelector("#display-numbers");
display.textContent = "0";

let displayUpdate = "";

const buttons = document.querySelectorAll(".standard-button");
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    displayUpdate += button.textContent;
    display.textContent = displayUpdate;
  });
});
