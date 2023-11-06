let products = [
    {
        id: 1,
        image: "./assets/images/1.png",
        title: "Calabrese Broccoli",
        span: "20.00"
    },
    {
        id: 2,
        image: "./assets/images/2.png",
        title: "Fresh Banana Fruites",
    },
    {
        id: 3,
        image: "./assets/svg/3.svg",
        title: "White Nuts",
    },
    {
        id: 4,
        image: "./assets/svg/4.svg",
        title: "Vegan Red Tomato",
    },
    {
        id: 5,
        image: "./assets/svg/1.svg",
        title: "Mung Bean",
    },
    {
        id: 6,
        image: "./assets/svg/1.svg",
        title: "Brown Hazelnut",
    },
    {
        id: 7,
        image: "./assets/svg/1.svg",
        title: "Eggs",
    },
    {
        id: 8,
        image: "./assets/svg/1.svg",
        title: "Zelco Suji Elaichi Rusk",
    },
];

const shopContentProducBox = document.querySelector(".shop-content-product-box");

let showCart = products.map((item) => {
    return `
       <div class="box">
          <img src="${item.image}" alt="alt"/>
          <div class="rating">
              <h2>${item.title}</h2>
              <div class="rating-div">
                <div class="rating-div-price">
                   <span>${item.span}</span>
                   <p></p>
                </div>
                <img src="" alt=""/>
              </div>
          </div>
       </div>
    `
});
shopContentProducBox.innerHTML = showCart.join('');