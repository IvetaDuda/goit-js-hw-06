'use string';
const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.addEventListener('input', onTextScroll);

span.style.fontSize = input.value + 'px';

function onTextScroll(event) {
  span.style.fontSize = event.currentTarget.value + 'px';
}
