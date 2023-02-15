const button = document.querySelector(".btn");
const getInput = document.querySelector("#validation-input");
console.log(getInput);
getInput.addEventListener("blur", () => {
  if (getInput.value.length >= 6) {
    getInput.classList.remove("invalid");
    getInput.classList.add("valid");
    return;
  } else if (getInput.value.length < 6) {
    getInput.classList.remove("valid");
    getInput.classList.add("invalid");
  }
});
