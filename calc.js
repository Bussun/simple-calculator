const buttons = document.querySelectorAll('.btn');
const display = document.querySelector('.text');
let num1 = undefined, num2 = undefined, result = undefined, operator = undefined;

buttons.forEach(button => button.addEventListener('click', process));



const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b !=0) ? a / b : display.textContent = 'Nice try';
const power = (x, n) => Math.pow(x, n);


function process(e) {
  switch (this.classList.contains(value)) {
    case value == 'number':
      if (operator != undefined) {
        num1 += this.name;
        console.log(num1);
      } else {
        num2 += this.name;
      }
      break;

    case value == 'operators':
      if (this.name == '=') break;
      if (num1 == undefined && result != 0 && result != undefined) num1 = result;
      operator = this.name;
      break;

    case value == 'equal':
      if (num2 == undefined) break;
      switch (operator) {
        case '+':
          reault = add(num1, num2);
          resetVars();
          break;

        case '-':
          result = substract(num1, num2);
          resetVars();
          break;

        case '*':
          result = multiply(num1, num2);
          resetVars();
          break;

        case '**':
          result = power(num1, num2);
          resetVars();
          break;
      }

    case value == 'reset':

    case value == 'backspace':
  }
}

function resetVars() {
  num1 = undefined;
  num2 = undefined;
  operator = undefined;
}

function resetCalc() {
  num1 = undefined;
  num2 = undefined;
  result = undefined;
  operator = undefined;
  display.textContent = '0';
}

resetCalc();
