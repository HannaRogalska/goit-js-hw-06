function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const getBody = document.querySelector("body");
console.log(getBody);
const getSpan = document.querySelector(".color");
console.log(getSpan);
const getButton = document.querySelector(".change-color");
console.log(getButton);

getButton.addEventListener("click", () => {
  getBody.style.backgroundColor = getRandomHexColor();
  getSpan.textContent = getBody.style.backgroundColor;
});
