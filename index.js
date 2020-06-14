function calc() {
  const display = easyToSearch("#display");
  const clearButton = easyToSearch("#clear");
  const removeButton = easyToSearch("#remove");
  const equal = easyToSearch("#equal");
  const ops = easyToSearch(".ops");
  const nums = easyToSearch(".num");

  let num = "";
  let oldNum = "";
  let resultNum;
  let operator;

  // simple element search
  function easyToSearch(element) {
    if (element.charAt(0) === "#") {
      return document.querySelector(element);
    }

    return document.querySelectorAll(element);
  }

  // setting operators
  function setOps() {
    if (!operator) {
      oldNum = num;
      num = "";
      operator = this.value;
    }
  }
  // setting operators for keyboard
  function setOpsOnKeyboard(val) {

  for (let i = 0; i < ops.length; i++) {
    ops[i].onclick = setOps;
  }

  // displaying numbers
  function setNums() {
    num += this.value;
    display.value = num;
  }

  // displaying numbers for keyboard
  function setNumsOnKeyboard(val) {
  for (let i = 0; i < nums.length; i++) {
    nums[i].onclick = setNums;
  }

  // clearing the display
  function onClearButton() {
    display.value = "";
    oldNum = "";
    num = "";
  }
  clearButton.addEventListener("click", onClearButton);

  // removing the last char
  function onRemoveButton() {
    display.value = display.value.slice(0, -1);
    oldNum = display.value;
    num = display.value;
  }
  removeButton.addEventListener("click", onRemoveButton);

  // blocking entry >1 dot
  function blockDot() {
    if (display.value.includes(".")) {
      dot.value = "";
    } else {
      dot.value = ".";
    }
  }
  const dot = document.querySelector(".dot");
  dot.addEventListener("click", blockDot);

  // the calculations are displayed
  function displayNum() {
    oldNum = parseFloat(oldNum);
    num = parseFloat(num);

    switch (operator) {
      case "+":
        resultNum = oldNum + num;
        break;

      case "-":
        resultNum = oldNum - num;
        break;

      case "*":
        resultNum = oldNum * num;
        break;

      case "/":
        resultNum = oldNum / num;
        break;

      default:
        resultNum = num;
    }

    if (!isFinite(resultNum)) {
      resultNum = "Ошибка";
    }

    display.value = parseFloat(resultNum.toFixed(2));
    oldNum = 0;
    num = resultNum;
    operator = null;
  }

  // support for keyboard
  document.addEventListener("keydown", function (e) {
  equal.addEventListener("click", displayNum);
}

window.onload = calc;
