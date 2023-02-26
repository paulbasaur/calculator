const input1 = "344.";
const input2 = "321.5";
const input3 = "2.45-2.";
const input4 = "98.2*23.9";
const input5 = "344";
const input6 = "478.5+31"

const input7 = "0";
const input8 = "34.2+";
const input9 = "12+3"
const input10 = "2+";
const input11 = "";

const inputs = [input1, input2, input3, input4, input5, input6];

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
    if (input == "" || input == "0" ) {
      return "0."
    } else if (input.slice(-1) == operator) {
      return(input + "0.");
    }
  }
  return(input + ".");
}

const input12 = "";
const input13 = "3";
const input14 = "23.";
const input15 = "23-";
const input16 = "344.4";
const input17 = "478.5+31"
const input18 = "0";
const input19 = "34.2+";
const input20 = "0.";

const inputs2 = [input12, input13, input14, input15, input16,
                input17, input18, input19, input20];

function appendOperator(input, button) {
  const operators = ["+", "-", "*", "/"];
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
  const operators = ["+", "-", "*", "/"];
  originalInput = input.slice(0, -1);
  for (let operator of operators) {
    if (originalInput.includes(operator)) {
      return(eval(originalInput) + button);
    } else { return(input);}
  }
}

for (let input of inputs2) {
  let ogInput = appendOperator(input, "-");
  return(evaluateCheck(ogInput, "-"));
}
