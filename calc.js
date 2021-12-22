const buttons = document.querySelectorAll('.btn');
const display = document.querySelector('.text');
const operatorDisplay = document.querySelector('.operator-display');
let num1 = undefined,
  num2 = undefined,
  result = undefined,
  operator = undefined,
  illegalOperation = false;

resetCalc();

buttons.forEach((button) => button.addEventListener('click', process));
window.addEventListener('keydown', (e) => processKey(e.key));

const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b != 0 ? a / b : easterEgg());
const power = (x, n) => Math.pow(x, n);

function processKey(key) {
  switch (key) {
    case '1':
    case '2': 
    case '3': 
    case '4': 
    case '5': 
    case '6': 
    case '7': 
    case '8': 
    case '9':
    case '0':
      if (operator == undefined) {
        if (num1 == undefined) num1 = '';
        if (this.name == '.' && num1.includes('.')) break;
        if (num1.length >= 9) break;
        num1 += key;
        display.textContent = num1;
      } else {
        if (num2 == undefined) num2 = '';
        if (this.name == '.' && num2.includes('.')) break;
        if (num2.length >= 9) break;
        num2 += key;
        display.textContent = num2;
      }
      break;

    case '+': 
    case '-': 
    case '*': 
    case '/':
    case '^':
      if (num1 == undefined && result != 0 && result != undefined)
        num1 = result;
      if (
        num1 == undefined &&
        num2 == undefined &&
        result == undefined &&
        key == '-'
      ) {
        num1 = 0;
        operator = key;
        setOperatorDisplay();
        break;
      }
      if (num1 == undefined && result == undefined) break;
      if (num2 != undefined) {
        operate();
        if (illegalOperation) {
          illegalOperation = false;
          break;
        }
        operator = key;
        setOperatorDisplay();
        num1 = result;
        break;
      }
      if (key == '^') operator = '**'
      operator = key;
      setOperatorDisplay();
      break;

    case '=':
    case 'Enter':
      if (num2 == undefined) break;
      operate();
      break;

    case 'r':
      resetCalc();
      break;

    case 'Backspace':
      if (num2 == undefined) {
        num1 = num1.slice(0, num1.length - 1);
        display.textContent = num1;
        break;
      }
      num2 = num2.slice(0, num2.length - 1);
      display.textContent = num2;
      break;
  }
}

function process() {
  let classListofBtn = this.classList;
  switch (true) {
    case classListofBtn.contains('number'):
      if (operator == undefined) {
        if (num1 == undefined) num1 = '';
        if (this.name == '.' && num1.includes('.')) break;
        if (num1.length >= 9) break;
        num1 += this.name;
        display.textContent = num1;
      } else {
        if (num2 == undefined) num2 = '';
        if (this.name == '.' && num2.includes('.')) break;
        if (num2.length >= 9) break;
        num2 += this.name;
        display.textContent = num2;
      }
      break;

    case classListofBtn.contains('operators'):
      if (num1 == undefined && result != 0 && result != undefined)
        num1 = result;
      if (
        num1 == undefined &&
        num2 == undefined &&
        result == undefined &&
        classListofBtn.contains('substract')
      ) {
        num1 = 0;
        operator = this.name;
        setOperatorDisplay();
        break;
      }
      if (num1 == undefined && result == undefined) break;
      if (num2 != undefined) {
        operate();
        if (illegalOperation) {
          illegalOperation = false;
          break;
        }
        operator = this.name;
        setOperatorDisplay();
        num1 = result;
        break;
      }
      operator = this.name;
      setOperatorDisplay();
      break;

    case classListofBtn.contains('equal'):
      if (num2 == undefined) break;
      operate();
      break;

    case classListofBtn.contains('reset'):
      resetCalc();
      break;

    case classListofBtn.contains('backspace'):
      if (num2 == undefined) {
        num1 = num1.slice(0, num1.length - 1);
        display.textContent = num1;
        break;
      }
      num2 = num2.slice(0, num2.length - 1);
      display.textContent = num2;
      break;
  }
}

function operate() {
  switch (operator) {
    case '+':
      result = roundNumber(add(+num1, +num2));
      resetVars();
      display.textContent = result;
      break;

    case '-':
      result = roundNumber(substract(+num1, +num2));
      resetVars();
      display.textContent = result;
      break;

    case '*':
      result = roundNumber(multiply(+num1, +num2));
      resetVars();
      display.textContent = result;
      break;

    case '**':
      result = roundNumber(power(+num1, +num2));
      resetVars();
      display.textContent = result;
      break;

    case '/':
      if (+num2 == 0) {
        display.textContent = 'Nice try';
        result = undefined;
        resetVars();
        illegalOperation = true;
        break;
      }
      result = roundNumber(divide(num1, num2));
      //result = roundNumber(result);
      resetVars();
      display.textContent = result;
      break;

    default:
      display.textContent = 'Something went wrong';
      break;
  }
}

function roundNumber(num) {
  if (num % 1 != 0) return Number.parseFloat(num).toFixed(2);
  else if (num > 100000) return Number.parseFloat(num).toExponential(2);
  else return num;
}

function setOperatorDisplay() {
  switch (operator) {
    case '+':
      operatorDisplay.textContent = '+';
      break;
    case '-':
      operatorDisplay.textContent = '-';
      break;
    case '*':
      operatorDisplay.textContent = '×';
      break;
    case '/':
      operatorDisplay.textContent = '÷';
      break;
    case '**':
      operatorDisplay.innerHTML = '𝑥<sup>𝑛</sup>';
      break;
  }
}

function resetVars() {
  num1 = undefined;
  num2 = undefined;
  operator = undefined;
  operatorDisplay.innerHTML = '';
}

function resetCalc() {
  num1 = undefined;
  num2 = undefined;
  result = undefined;
  operator = undefined;
  display.textContent = '0';
  operatorDisplay.innerHTML = '';
}

function easterEgg() {
  buttons.forEach((button) => (button.textContent = '0'));
  display.style.fontSize = '15px';
  display.textContent = 'You like 0, don\'t you ? (Reload to continue.)';
}
