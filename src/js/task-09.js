function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeBodyColor = document.querySelector('body');
const btnChange = document.querySelector('.change-color');
const outputColor = document.querySelector('.color');

btnChange.addEventListener('click', changeBgColor);
function changeBgColor() {
  outputColor.textContent = getRandomHexColor();
  changeBodyColor.style.backgroundColor = outputColor.textContent;
}
btnChange.style.borderRadius = '25px';
btnChange.style.backgroundColor = 'transparent';
btnChange.style.borderColor = '#000000';
