const category = document.getElementById("category");

category.addEventListener("change", function () {

    if (category.value === "All") {
        displayProducts(products);
    } else {

        const filteredProducts = products.filter(product =>
            product.category === category.value
        );

        displayProducts(filteredProducts);
    }

});