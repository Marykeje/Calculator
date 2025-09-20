"use script";

// const result = document.getElementById('result')
// initialize the input to 0
// variable for the operator symbols

// selecting all number buttons
// const buttons = document.querySelectorAll('.symbol')

// let add = 0;

// for the form implementation
// initializing the inputs value
function calculate() {
  let figure1 = document.getElementById("num1").value.Number;
  let figure2 = document.getElementById("num2").value;

  // for the operator
  if (operator === add) {
    result = figure1 + figure2;
  } else if (operator === subtract) {
    result = figure1 - figure2;
  } else if (operator === multiply) {
    result = figure1 * figure2;
  } else if (operator === divide) {
    result = figure1 / figure2;
  }
}


let operate = 0

function add() {
   operate = 
}

// function add() {
//   result = result + 1;
//   submitEl.innerText = result;
// }

// for the submit button
document.getElementById("demo").innerText = result;
