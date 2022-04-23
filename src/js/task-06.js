const input = document.querySelector('input');

input.addEventListener('blur', (event) => {
  event.preventDefault();
  event.currentTarget.value.length !== Number(input.dataset.length)
    ? input.classList.add('invalid')
    : input.classList.remove('invalid'),
    input.classList.add('valid');
});
