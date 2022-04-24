'use string';
const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', onTextScroll);

spanEl.style.fontSize = inputEl.value + 'px';

function onTextScroll(event) {
  spanEl.style.fontSize = event.currentTarget.value + 'px';
}
