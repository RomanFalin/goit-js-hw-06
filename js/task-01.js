const itemsNumber = document.querySelectorAll(".item");
console.log("Number of categories:", itemsNumber.length);

const category = document.querySelectorAll(".item h2");
const elementsFirst = itemsNumber[0].querySelector("ul");
const elementsSecond = itemsNumber[1].querySelector("ul");
const elementsThird = itemsNumber[2].querySelector("ul");
console.log("Category:", category[0]);
console.log("Elements:", elementsFirst.childElementCount);
console.log("Category:", category[1]);
console.log("Elements:", elementsSecond.childElementCount);
console.log("Category:", category[2]);
console.log("Elements:", elementsThird.childElementCount);