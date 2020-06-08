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

  // функция удобного поиска элемента
  function easyToSearch(element) {
    if (element.charAt(0) === "#") {
      return document.querySelector(element);
    }

    return document.querySelectorAll(element);
  }

  // функция назначения операторов
  function setOps() {
    if (!operator) {
      oldNum = num;
      num = "";
      operator = this.value;
    }
  }

  for (let i = 0; i < ops.length; i++) {
    ops[i].onclick = setOps;
  }

  // функция отображения цифр на дисплее
  function setNums() {
    num += this.value;
    display.value = num;
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i].onclick = setNums;
  }

  // функция полного очищения дисплея
  function onClearButton() {
    display.value = "";
    oldNum = "";
    num = "";
  }
  clearButton.addEventListener("click", onClearButton);

  // функция удаления последней цифры на дисплее
  function onRemoveButton() {
    display.value = display.value.slice(0, -1);
    oldNum = display.value;
    num = display.value;
  }
  removeButton.addEventListener("click", onRemoveButton);

  // if (display.value.includes(".")) {
  //   console.log("Много точек");
  // }

  // логика операций на дисплее
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

    if (!display.value.includes(".")) {
      console.log("Много точек");
    }

    display.value = parseFloat(resultNum.toFixed(2));
    oldNum = 0;
    num = resultNum;
    operator = null;
  }

  equal.addEventListener("click", displayNum);
}

window.onload = calc;
