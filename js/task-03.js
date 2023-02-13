const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const elemList = document.querySelector(".gallery");
console.log(elemList);
const newElement = images.map((elem) => {
  return `<li><img src="${elem.url}" alt="${elem.alt}"></img$></li>`;
});
console.log(newElement);

elemList.insertAdjacentHTML("beforeend", newElement.join(" "));
elemList.style.display = "flex";
elemList.style.flexDirection = "row";
elemList.style.flexWrap = "nowrap";
elemList.style.listStyle = "none";
elemList.style.gap = "20px";


