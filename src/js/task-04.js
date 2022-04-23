const counterValue = () => {
  const btns = document.querySelectorAll('button');
  // console.log(btns);

  btns.forEach((btn) => {
    btn.addEventListener('click', function () {
      const action = this.dataset.action;
      const spn = this.parentElement.querySelector('#value');
      const values = +spn.value;
      let newValue;

      if (action === 'increment') {
        newValue = values + 1;
      } else {
        newValue = values - 1 > 0 ? values - 1 : 0;
      }

      spn.value = newValue;
    });
  });
};
counterValue();
