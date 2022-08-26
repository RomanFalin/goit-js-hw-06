const validationInputEl = document.querySelector('body #validation-input[data-length="6"]');

const doValidation = (event) => {
    if (+event.currentTarget.value.length === +validationInputEl.dataset.length) {
        validationInputEl.classList.remove("invalid");
        validationInputEl.classList.add("valid");
    }
    else {
        validationInputEl.classList.remove("valid");
        validationInputEl.classList.add("invalid");
    }
}

validationInputEl.addEventListener("blur", doValidation);