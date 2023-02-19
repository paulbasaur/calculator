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

console.log(leadingZero(input7));
console.log(leadingZero(input10));
console.log(leadingZero(input11));


// for (let input of inputs) {
//   console.log(decimalCheck(input));
// }
