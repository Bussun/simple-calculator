const buttons = document.querySelectorAll('.btn');
const display = document.querySelector('.text');
let expressionString = '';

buttons.forEach(button => button.addEventListener('click', process));



const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const power = (x, n) => Math.pow(x, n);


function process(e) {
  switch (this.name) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      expressionString += this.name;
      break;

    case '+':
    case '-':
    case '*':
    case '/':
    case '**':
      expressionString += ' ' + this.name + ' ';
      break;

    case '=':
      
      break;

    case 'reset':
      expressionString = '';
      break;

    case 'backspace':
      if (expressionString.charAt(expressionString.length-1) == ' ') {
        expressionString = expressionString.slice(0, expressionString.length-3);
      } else {
        expressionString = expressionString.slice(0, expressionString.length-1);
      }
      break;

  }
  console.log('Value after processing: ' + expressionString);
  display.textContent = expressionString;
}
