const getRange = document.querySelector("#font-size-control");
const getText = document.querySelector("#text");
console.log(getRange);
getRange.addEventListener('input', () => {
   getText.style.fontSize = getRange.value + 'px'
})