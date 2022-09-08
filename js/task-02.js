const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createIngrMarkup = function (name) {
  const itemRef = document.createElement("li");
  itemRef.classList.add("item");
  itemRef.textContent = name;
  return itemRef;
};
const ingrListRef = ingredients.map(createIngrMarkup);
document.querySelector("#ingredients").append(...ingrListRef);
