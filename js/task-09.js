const body = document.body;
const colorName = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColorChange = () => {
  body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();
}

body.addEventListener("click", bodyColorChange);