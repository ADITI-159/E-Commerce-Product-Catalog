const products = [

{

id:1,

name:"Laptop",

price:60000,

category:"Electronics",

image:"../images/laptop.jpg"

},

{

id:2,

name:"Shoes",

price:2500,

category:"Fashion",

image:"../images/shoes.jpg"

}

];

const container=document.getElementById("product-container");

function displayProducts(productList){

container.innerHTML="";

productList.forEach(product=>{

container.innerHTML+=`

<div class="product-card">

<img src="${product.image}" width="200">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<p>${product.category}</p>

<button onclick="addToCart(${product.id})">Add to Cart</button>

</div>

`;

});

}

displayProducts(products);
function addToCart(id) {

    const selectedProduct = products.find(product => product.id === id);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(selectedProduct);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(selectedProduct.name + " added to cart!");
}