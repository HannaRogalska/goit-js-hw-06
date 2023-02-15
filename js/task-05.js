const getInput = document.querySelector("#name-input");
console.log(getInput);
const getOutput = document.querySelector("#name-output");
console.log(getOutput);
getInput.addEventListener("input", (event) => {
  if (getInput.value.length <= 0) {
    getOutput.textContent = "Anonymous";
  } else {
    getOutput.textContent = event.currentTarget.value;
  }
});
