const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const elemIngediens = document.querySelector("#ingredients");
console.log(elemIngediens);

const newItemElem = ingredients.map((elem) => {
  const creatNewElem = document.createElement('li');
  creatNewElem.classList.add('item');
  creatNewElem.textContent = elem;

 console.log(creatNewElem);
return creatNewElem;
});
const newListAndItem = elemIngediens.append(...newItemElem);
console.log(newListAndItem);


