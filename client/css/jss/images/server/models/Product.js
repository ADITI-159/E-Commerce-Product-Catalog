document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:5000/api/products")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("product-container");

      data.forEach(product => {
        const card = document.createElement("div");

        card.innerHTML = `
          <h3>${product.name}</h3>
          <p>₹${product.price}</p>
          <p>${product.category}</p>
        `;

        container.appendChild(card);
      });
    })
    .catch(err => console.log("Error:", err));
});