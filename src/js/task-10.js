function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  inputEl: document.querySelector('input'),
  divCreateEl: document.querySelector('button[data-create]'),
  btnDestroyEl: document.querySelector('button[data-destroy]'),
  divBoxEl: document.querySelector('#boxes'),
};

refs.divCreateEl.addEventListener('click', createBoxes);
refs.btnDestroyEl.addEventListener('click', createDestroy);

const inputValue = () => Number(refs.inputEl.value);
function createBoxes(amount) {
  const boxes = [];
  amount = inputValue();

  let basicWidth = 30;
  let basicHeight = 30;

  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');

    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${(basicWidth += 10)}px`;
    box.style.height = `${(basicHeight += 10)}px`;

    boxes.push(box);
  }
  refs.divBoxEl.append(...boxes);
  refs.divBoxEl.style.display = 'box';
}

function createDestroy() {
  refs.divBoxEl.innerHTML = '';
}
