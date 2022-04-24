const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

let number = Number(value.textContent);
const onBtnDecrement = () => {
  value.textContent = number -= 1;
};
const onBtnIncrement = () => {
  value.textContent = number += 1;
};
btnDecrement.addEventListener('click', onBtnDecrement);
btnIncrement.addEventListener('click', onBtnIncrement);
