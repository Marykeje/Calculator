"use script";

// const result = document.getElementById('result')
// initialize the input to 0

// selecting all number buttons
// const buttons = document.querySelectorAll('.symbol')

// for the form implementation
// initializing the inputs value
function calculate() {
  // alert('show')
  let figure1 = document.getElementById("num1").value;
  let figure2 = document.getElementById("num2").value;

  figure1 = parseFloat(figure1);
  figure2 = parseFloat(figure2);

  let operator = document.getElementById("operator").value;

  // console.log(operator)

  // for the operator
  let result = null;

  if (operator === "add") {
    result = figure1 + figure2;
  } else if (operator === "subtract") {
    result = figure1 - figure2;
  } else if (operator === "multiply") {
    result = figure1 * figure2;
  } else if (operator === "divide") {
    result = figure1 / figure2;
  }
  console.log(result);

  // let totalResult = document.getElementById("result");
  // console.log(totalResult.textContent); //this only prints to the developer console, not on the web page

  // totalResult.textContent = "Result: " + result; //assigning the calculated result to the p tag

  document.getElementById("result").textContent = result; //updating the p tag.
  // javascript takes the result and update on the p tag
}


// calculate();

// let operate = 0;

// function add() {
// operate = 0 + 1;
// }

// function add() {
//   result = result + 1;
//   submitEl.innerText = result;
// }

// for the submit button
// document.getElementById("demo").innerText = result;
