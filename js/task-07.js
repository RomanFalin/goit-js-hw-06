const fontChanger = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

const changeFont = (event) => {
    output.style.fontSize = `${event.currentTarget.value}px`;
}

fontChanger.addEventListener("input", changeFont);