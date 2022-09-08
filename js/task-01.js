const categoriesListRef = document.querySelector("#categories");
const categoriesRef = document.querySelectorAll("li.item");

console.log(`Number of categories: ${categoriesListRef.children.length}`);

function sowCountElements(elements) {
  for (const element of elements) {
    console.log("");
    console.log(`Category: ${element.querySelector("h2").textContent}`);
    console.log(`Elements: ${element.querySelectorAll("li").length}`);
  }
}

sowCountElements(categoriesRef);
