const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => button.addEventListener('click', logText));

function logText(e) {
  console.log(this.name);
}
