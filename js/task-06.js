const validationInputEl = document.querySelector("body#validation-input");

const doFocus = () => {
    validationInputEl.classList.remove("invalid");
    validationInputEl.classList.add("valid");
}

const undoFocus = () => {
    validationInputEl.classList.remove("valid");
    validationInputEl.classList.add("invalid");
}

validationInputEl.addEventListener("focus", doFocus);
validationInputEl.addEventListener("blur", undoFocus);