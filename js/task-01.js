const newListItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${newListItem.length}`);

const allCategories = newListItem.forEach((elem) => {
  console.log(`Category: ${elem.querySelector("h2").textContent}`);
  console.log(`Elements: ${elem.querySelectorAll("li").length}`);
});
