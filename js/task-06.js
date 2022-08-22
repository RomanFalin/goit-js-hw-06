const validationInputEl = document.querySelector('body #validation-input[data-length="6"]');

const doValidation = (event) => {
    if (event.currentTarget.value.length <= validationInputEl.dataset.length) {
        validationInputEl.classList.add("valid");
    }
    else if (event.currentTarget.value.length >= validationInputEl.dataset.length) {
        validationInputEl.classList.add("invalid");
    }
}

validationInputEl.addEventListener("blur", doValidation);