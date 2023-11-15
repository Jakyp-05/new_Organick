let products = [
    {
        id: 1,
        image: "./assets/images/1.png",
        title: "Calabrese Broccoli",
        span: "20.00",
        price: "13.00",
        img: "./assets/svg/rating.svg"
    },
    {
        id: 2,
        image: "./assets/images/2.png",
        title: "Fresh Banana Fruites",
        span: "20.00",
        price: "14.00",
        img: "./assets/svg/rating.svg"
    },
    {
        id: 3,
        image: "./assets/images/3.png",
        title: "White Nuts",
        span: "20.00",
        price: "15.00",
        img: "./assets/svg/rating.svg"
    },
    {
        id: 4,
        image: "./assets/images/4.png",
        title: "Vegan Red Tomato",
        span: "20.00",
        price: "17.00",
        img: "./assets/svg/rating.svg"
    },
    {
        id: 5,
        image: "./assets/images/5.png",
        title: "Mung Bean",
        span: "20.00",
        price: "11.00",
        img: "./assets/svg/rating.svg"
    },
    {
        id: 6,
        image: "./assets/images/6.png",
        title: "Brown Hazelnut",
        span: "20.00",
        price: "12.00",
        img: "./assets/svg/rating.svg"
    },
    {
        id: 7,
        image: "./assets/images/7.png",
        title: "Eggs",
        span: "20.00",
        price: "17.00",
        img: "./assets/svg/rating.svg"
    },
    {
        id: 8,
        image: "./assets/images/8.png",
        title: "Zelco Suji Elaichi Rusk",
        span: "20.00",
        price: "15.00",
        img: "./assets/svg/rating.svg"
    },
];

const shopContentProducBox = document.querySelector(".shop-content-product-box");

let showCart = products.map((item) => {
    return `
       <div class="box">
          <img width="350px" height="350px" src="${item.image}" alt="alt"/>
          <div class="rating">
              <h2>${item.title}</h2>
            <div class="rating-div">
                <div class="rating-div-price">
                   <span>${item.span}</span>
                   <p>${item.price} $</p>
                </div>
                <img src="${item.img}" alt="alt-img"/>
            </div>
          </div>
       </div>
    `
});
shopContentProducBox.innerHTML = showCart.join('');

const latterBtn = document.getElementById("latter-btn");
const latterInput = document.getElementById("latter-input");

latterBtn.onclick = () => {
    if(latterInput.value) {
        alert("hello")
        latterInput.style.border = '3px solid green'
    } else {
        latterInput.style.border = '3px solid red'
    }
}