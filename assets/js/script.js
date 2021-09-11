var memory = "0",
  current = "0",
  operation = 0;
const maxChar = 10;
const display = document.querySelector(".display p");

// Adding a value to screen
function displayValue(dig) {
  if (eval(current) === 0 && current.indexOf(".") === -1) {
    current = dig;
  } else {
    current += dig;
  }

  display.innerHTML = current;
}
// Adding a decimal.
function addDecimal() {
  if (current.length === 0) {
    current = "0.";
  } else if (current.indexOf(".") === -1) {
    current += ".";
  }

  display.innerHTML = current;
}

// Clear everything
function allClear() {
  current = "0";
  Operation = 0;
  memory = "0";

  display.innerHTML = current;
}

/** The priorities of operators is 
multiply *	    1
divide /	    2
addition	+   3
subtraction -	4
 */
function addOperation(op) {
  if (operation !== 0) {
    calculate();
  }
  if (op.indexOf("*") > -1) {
    operation = 1;
  }
  if (op.indexOf("/") > -1) {
    operation = 2;
  }
  if (op.indexOf("+") > -1) {
    operation = 3;
  }
  if (op.indexOf("-") > -1) {
    operation = 4;
  }

  memory = current;
  current = "";

  display.innerHTML = current;
}

// Calculate function
function calculate() {
  if (operation === 1) {
    current = eval(memory) * eval(current);
  }

  if (operation === 2) {
    if (eval(current) !== 0) {
      current = eval(memory) / eval(current);
    } else {
      current = "Error";
    }
  }

  if (operation === 3) {
    current = eval(memory) + eval(current);
  }
  if (operation === 4) {
    current = eval(memory) - eval(current);
  }

  current = current + "";
  operation = 0;
  memory = "0";

  display.innerHTML = current;
}
