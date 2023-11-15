let array = [
    {
        id: 1,
        image: "./assets/images/1.png",
        title: "Calabrese Broccoli",
        prices : {
                price_span: "20.00",
                praice_p: "13.00"
        },
        tags: "Vegetable"
    },
    {
        id: 2,
        image: "./assets/images/2.png",
        title: "Fresh Banana Fruites",
        prices : {
                price_span: "20.00",
                praice_p: "14.00"
        },
        tags: "Fresh"
    },
    {
        id: 3,
        image: "./assets/images/3.png",
        title: "White Nuts",
        prices : {
            price_span: "20.00",
            praice_p: "15.00"
        },
        tags: "Millets",
    },
    {
        id: 4,
        image: "./assets/images/4.png",
        title: "Vegan Red Tomato",
        prices : {
            price_span: "20.00",
            praice_p: "17.00"
        },
        tags: "Millets"
    },
    {
        id: 5,
        image: "./assets/images/5.png",
        title: "Mung Bean",
        prices : {
            price_span: "20.00",
            praice_p: "11.00"
        },
        tags: "Health"
    },
    {
        id: 6,
        image: "./assets/images/6.png",
        title: "Brown Hazelnut",
        prices : {
            price_span: "20.00",
            praice_p: "12.00"
        },
        tags: "Nuts"
    },
    {
        id: 7,
        image: "./assets/images/7.png",
        title: "Eggs",
        prices : {
            price_span: "20.00",
            praice_p: "17.00"
        },
        tags: "Fresh"
    },
    {
        id: 8,
        image: "./assets/images/8.png",
        title: "Zelco Suji Elaichi Rusk",
        prices : {
            price_span: "20.00",
            praice_p: "15.00"
        },
        tags: "Fresh"
    },
    {
        id: 9,
        image: "./assets/images/9.png",
        title: "Zelco Suji Elaichi Rusk",
        prices : {
            price_span: "20.00",
            praice_p: "11.00"
        },
        tags: "Health"
    },
    {
        id: 10,
        image: "./assets/images/10.png",
        title: "White Hazelnut",
        prices : {
            price_span: "20.00",
            praice_p: "12.00"
        },
        tags: "Nuts"
    },
    {
        id: 11,
        image: "./assets/images/11.png",
        title: "Fresh Corn",
        prices : {
            price_span: "20.00",
            praice_p: "17.00"
        },
        tags: "Fresh"
    },
    {
        id: 12,
        image: "./assets/images/12.png",
        title: "Fresh Corn",
        prices : {
            price_span: "20.00",
            praice_p: "17.00"
        },
        tags: "Fresh"
    },
]

const cardBlock = document.getElementById("shop");
const shopBlock = array.map(item => {
    return `
       <div class="card-shop">
            <span class="variant">${item.tags}</span>
            <img src="${item.image}" alt="">
            <div class="shop__title">
                <h2>${item.title}</h2>
                <div class="shop__price">
                    <div class="shop-price">
                        <span>${item.prices.price_span}</span>
                        <p>${item.prices.praice_p}</p>
                    </div>
                    <div class="star">
                        <i class='bx bx-star'></i>
                        <i class='bx bx-star'></i>
                        <i class='bx bx-star'></i>
                        <i class='bx bx-star'></i>
                        <i class='bx bx-star'></i>
                    </div>
                </div>
            </div>
        </div>
    `
})

cardBlock.innerHTML = shopBlock.join("")

// let stars = document.querySelectorAll(".star i");

// stars.forEach((item, index1) => {
//     item.addEventListener("click", () => {
//         stars.forEach((star, index2) => {
//             if (index1 >= index2) {
//                 star.classList.add("active");
//             } else {
//                 star.classList.remove("active");
//             }
//         });
//     });
// });
let stars = document.querySelectorAll(".star i");

stars.forEach((item, index1) => {
    item.addEventListener("click", () => {
        stars.forEach((star, index2) => {
            if (index1 === index2) {
                star.classList.toggle("active");
            } else if (index2 < index1) {
                star.classList.add("active");
            } else {
                star.classList.remove("active");
            }
        });
    });
});


