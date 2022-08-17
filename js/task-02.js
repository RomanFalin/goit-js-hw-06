const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elementFirst = document.createElement("li");
elementFirst.textContent = ingredients[0];
elementFirst.classList.toggle("item");

const elementSecond = document.createElement("li");
elementSecond.textContent = ingredients[1];
elementSecond.classList.toggle("item");

const elementThird = document.createElement("li");
elementThird.textContent = ingredients[2];
elementThird.classList.toggle("item");

const elementFourth = document.createElement("li");
elementFourth.textContent = ingredients[3];
elementFourth.classList.toggle("item");

const elementFifth = document.createElement("li");
elementFifth.textContent = ingredients[4];
elementFifth.classList.toggle("item");

const elementSixth = document.createElement("li");
elementSixth.textContent = ingredients[5];
elementSixth.classList.toggle("item");

const list = document.querySelector("#ingredients");
list.append(elementFirst, elementSecond, elementThird, elementFourth, elementFifth, elementSixth);