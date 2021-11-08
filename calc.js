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
  let classListofBtn = this.classList;
  switch (true) {
    case classListofBtn.contains('number'):
      if (operator == undefined) {
        if (num1 == undefined) num1 = '';
        num1 += this.name;
        display.textContent = num1;
      } else {
        if (num2 == undefined) num2 = '';
        num2 += this.name;
        display.textContent = num2;
      }
      break;

    case classListofBtn.contains('operators'):
      //if (this.name == '=') break;
      if (num1 == undefined && result != 0 && result != undefined) num1 = result;
      operator = this.name;
      break;

    case classListofBtn.contains('equal'):
      if (num2 == undefined) break;
      switch (operator) {
        case '+':
          reault = add(+num1, +num2);
          resetVars();
          display.textContent = result;
          break;

        case '-':
          result = substract(+num1, +num2);
          resetVars();
          display.textContent = result;
          break;

        case '*':
          result = multiply(+num1, +num2);
          resetVars();
          display.textContent = result;
          break;

        case '**':
          result = power(+num1, +num2);
          resetVars();
          display.textContent = result;
          break;

        case '/':
          if (+num2 == 0) textContent.display = 'Can\'t divide by 0';
          result = divide(num1, num2);
          display.textContent = result;
      }

    case classListofBtn.contains('reset'):
      resetCalc();
      break;

    case classListofBtn.contains('backspace'):
      break;
  }
  console.log(result);
}

function roundNumber(num) {
  return Number.parseFloat(num).toFixed(2);
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
