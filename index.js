const container = document.getElementById("root");
const myProducts = 
{
    id: 1,
    image: 'https://i.postimg.cc/W1G1HdgF/JJK-header-mobile2.webp',
    firstname: 'Brandon',
    lastname: 'Roulstone',
    Job: 'Software developer',
    age: 20
}
const storage = JSON.stringify(myProducts);
localStorage.setItem("testJson", storage);


let products = JSON.parse(localStorage.getItem("testJson"));
container.innerHTML = `
<img src="${products.image}"/>
<h2>${products.firstname}</h2>
<h2>${products.lastname}</h2>
`;

// function initApp(){
//     let products = JSON.parse(localStorage.getItem("testJson"));
//     container.innerHTML = `
//     <img src="${products.image}"/>
//     <h2>${products.firstname}</h2>
//     <h2>${products.lastname}</h2>`;
// }
// initApp();