let productArray = [
  {
    id: 1,
    cardImg:
      "https://i.postimg.cc/TYTsRRWK/Sony-Play-Station-5-Digital-Edition-Console.jpg",
    cardTitle: "PS5 - R10",
    cardText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quaerat?",
  },
  {
    id: 2,
    cardImg:
      "https://i.postimg.cc/TYTsRRWK/Sony-Play-Station-5-Digital-Edition-Console.jpg",
    cardTitle: "PS5 - R10",
    cardText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quaerat?",
  },
  {
    id: 3,
    cardImg:
      "https://i.postimg.cc/TYTsRRWK/Sony-Play-Station-5-Digital-Edition-Console.jpg",
    cardTitle: "PS5 - R10",
    cardText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quaerat?",
  },
  {
    id: 4,
    cardImg:
      "https://i.postimg.cc/TYTsRRWK/Sony-Play-Station-5-Digital-Edition-Console.jpg",
    cardTitle: "PS5 - R10",
    cardText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quaerat?",
  },
  {
    id: 5,
    cardImg:
      "https://i.postimg.cc/TYTsRRWK/Sony-Play-Station-5-Digital-Edition-Console.jpg",
    cardTitle: "PS5 - R10",
    cardText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quaerat?",
  },
];

let  productSection = document.querySelector(".product-section");

productArray.forEach((details) =>{
    productSection.innerHTML += `
    <div class="card m-3">
                    <img src="${details.cardImg}" alt="">
                    <div class="card-body">
                        <p class="card-title">${details.cardTitle}</p>
                        <p class="card-text">${details.cardText}</p>
                        <button class="btn btn-primary">Buy Now!</button>
                    </div>
                </div>
    `;
})

let btn = document.querySelector('.menu')
let nav = document.querySelector('.nav-links')

btn.addEventListener('click', function(){
    nav.classList.toggle('show')
})