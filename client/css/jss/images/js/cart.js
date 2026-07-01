let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cart-container");

const total = document.getElementById("total");

function displayCart() {

    container.innerHTML = "";

    let totalPrice = 0;

    cart.forEach((product, index) => {

        totalPrice += product.price;

        container.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" width="200">

            <h3>${product.name}</h3>

            <p>₹${product.price}</p>

            <button onclick="removeItem(${index})">Remove</button>

        </div>

        `;

    });

    total.innerHTML = "Total Price : ₹" + totalPrice;

}

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}

displayCart();