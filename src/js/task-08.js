const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Please fill in all  the fields!');
  } else {
    console.log(`email: ${email.value}, Password: ${password.value}`);
  }

  event.currentTarget.reset();
}
