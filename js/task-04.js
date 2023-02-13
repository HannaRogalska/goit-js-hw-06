const btnRemove = document.querySelector('button[data-action = "decrement"]');
console.log(btnRemove);
const btnAdd = document.querySelector('button[data-action = "increment"]');
console.log(btnAdd);
let resault = document.querySelector("#value");
console.log(resault);
let counterValue = 0;
btnRemove.addEventListener("click", () => {
    counterValue--;
    resault.textContent = counterValue;
   
});
btnAdd.addEventListener("click", () => {
    counterValue++;
    resault.textContent= counterValue;
   
});