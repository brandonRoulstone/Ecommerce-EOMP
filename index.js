const container = document.getElementById("root");

const myProducts = [
    {
        id: 1,
        image: 'https://i.postimg.cc/85QZ7pqb/original-G-shorts.jpg',
        name: 'G-star',
        brand: 'Roulstone',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 20
    },
    {
        id: 2,
        image: 'https://i.postimg.cc/KvzDv312/NikeAF1.jpg',
        name: 'Nike',
        brand: 'Son',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 34
    },
    {
        id: 3,
        image: 'https://i.postimg.cc/gjBR64xP/original-pants.jpg',
        name: 'Adidas',
        brand: 'Beanstalk',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 20
    },
    {
        id: 4,
        image: 'https://i.postimg.cc/7hghqVSV/hanoverian-long-down-jacket.webp',
        name: 'Moncler',
        brand: 'Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 23
    },
    {
        id: 5,
        image: 'https://i.postimg.cc/VNF2btLs/original-Shoes-GStar.jpg',
        name: 'Nike',
        brand: 'Jacobs',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 35
    },
    {
        id: 6,
        image: 'https://i.postimg.cc/LXpGr36R/clothes-4792200-640-products.jpg',
        name: 'Women',
        brand: 'Jacobs',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 35
    },
    {
        id: 7,
        image: 'https://i.postimg.cc/LXpGr36R/clothes-4792200-640-products.jpg',
        name: 'Women',
        brand: 'Jacobs',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 35
    },
    {
        id: 8,
        image: 'https://i.postimg.cc/LXpGr36R/clothes-4792200-640-products.jpg',
        name: 'Women',
        brand: 'Jacobs',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 35
    },
    // Add more products as needed... https://i.postimg.cc/2S3YwG3K/original-nike-dunk.jpg
];

const storage = JSON.stringify(myProducts);

localStorage.setItem("testJson", storage);

// Retrieving the products from localStorage
const products = JSON.parse(localStorage.getItem("testJson"));

// JSON.parse(localStorage.removeItem(item => item.id !== item.id));

// Displaying the products
products.forEach((product, key) => {
    container.innerHTML += `
        <div id="productCard" class="p-2 col-md-12 justify-content-center text-white">

            <div class="m-3 bg-black text-white p-2 h-100">
            
                <div class="image-container">
                <img src="${product.image}" id="imgContainer" class="img w-100 border border-black"/>
                </div>

                <div class="text-center">

                <h3>${product.name}</h3>

                <p>${product.brand}</p>

                <p>${product.description}</p>

                <p>$${product.price}</p>

                </div>

                <div class="d-flex justify-content-center">

                  <button onclick="add()" id="btnBuy" class="btn text-white m-2 w-100">Buy</button>

                </div>

            </div>
        </div>
    `;
});


// const inCart = []
// console.log(inCart);

// function add() {
    
//     addEventListener("click", () => {
//         myProducts.push(inCart)
//     })
// }
// add()


// const cartContainer = document.getElementById("cartContainer");

// // Function to add items to the cart
// function addToCart(key) {
//     const selectedProduct = products[key];
//     inCart.push(selectedProduct);
//     // Update the UI to reflect changes in the cart
//     displayCart();
// }

// // Function to display items in the cart
// function displayCart() {
//     cartContainer.innerHTML = ""; // Clear the cart container before updating
//     inCart.forEach((cartItem) => {
//         cartContainer.innerHTML += `
//             <div class="cart-item">
//                 <img src="${cartItem.image}" alt="${cartItem.name}" class="cart-item-image">
//                 <div class="cart-item-details">
//                     <h3>${cartItem.name}</h3>
//                     <p>${cartItem.brand}</p>
//                     <p>$${cartItem.price}</p>
//                 </div>
//             </div>
//         `;
//     });
// }

// // Initially display the cart
// displayCart();





// function print(limit){
//     let x= 1
//     if(limit >= x){
//         limit--
//         print(limit++);
//         console.log(limit);
//     }
// }
// print(10)