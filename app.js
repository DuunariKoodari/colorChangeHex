const ColorButton = document.querySelector('button');
const body = document.querySelector('body');
const hexValue = document.querySelector('#hex-value');

let letter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

ColorButton.addEventListener('click', randomColor);

function randomColor() {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * letter.length);
    color += letter[index];
  }
  hexValue.textContent = color;
  body.style.backgroundColor = color;
  console.log(color);
}
