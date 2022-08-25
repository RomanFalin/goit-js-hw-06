const addButton = document.querySelector('button[data-action="increment"]');
const subtarctButton = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector('#value');

let counterValue = 0;

const addition = () => {
    counterValue++;
    value.innerHTML = counterValue;
}

const subtraction = () => {
    counterValue--;
    value.innerHTML = counterValue;
}

addButton.addEventListener("click", addition);
subtarctButton.addEventListener("click", subtraction);