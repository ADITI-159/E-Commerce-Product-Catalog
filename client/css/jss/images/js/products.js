document.addEventListener("DOMContentLoaded", () => {
  fetch("https://e-commerce-product-catalog-vr9c.onrender.com")
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById("product-container");

      data.forEach((product) => {
        const card = document.createElement("div");

        card.innerHTML = `
          <h3>${product.name}</h3>s
          <p>₹${product.price}</p>
          <p>${product.category}</p>
        `;

        container.appendChild(card);
      });
    })
    .catch((err) => console.log(err));
});