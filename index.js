// operations
function sum(a, b) {
  return a + b;
}
function subtraction(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function operate(a, b, operator) {
  return operator(a, b);
}

// function calc() {
//   const display = document.getElementById("display");
//   switch (display.value) {
//     case "+":
//       result = a + b;
//       break;
//     case "-":
//       result = a - b;
//       break;
//     case "*":
//       result = a * b;
//       break;
//     case "÷":
//       result = a / b;
//   }
// }

function calc() {

}

function showNum() {
  const display = document.getElementById("display");
  const container = document.querySelector(".container");
  container.addEventListener("click", clickButton);
  let displayCounter = "";

  function clickButton(e) {
    const button = e.target;
    if (button.tagName === "BUTTON") {
      displayCounter = display.value += button.value;
      console.log(displayCounter);
    }
  }
}
showNum();

function onClearButton() {
  const display = document.getElementById("display");
  display.value = "";
}

function onRemoveButton() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", onClearButton);

const removeButton = document.getElementById("remove");
removeButton.addEventListener("click", onRemoveButton);