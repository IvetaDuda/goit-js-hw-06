const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

let number = 0;
const onBtnDecrement = () => {
  value.textContent = number -= 1;
};
const onBtnIncrement = () => {
  value.textContent = number += 1;
};
btnDecrement.addEventListener('click', onBtnDecrement);
btnIncrement.addEventListener('click', onBtnIncrement);
