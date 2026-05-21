const API_URL =
    "http://localhost:8080/api/products";

const productContainer =
    document.getElementById("product-container");

/**
 * Fetch products from Spring Boot API
 * Uses async/await with try/catch
 */

async function fetchProducts() {

    try {

        const response =
            await fetch(API_URL);

        /**
         * Check response manually
         */

        if (!response.ok) {

            if (response.status === 404) {
                throw new Error(
                    "Products not found"
                );
            }

            if (response.status === 500) {
                throw new Error(
                    "Internal server error"
                );
            }

            throw new Error(
                "Failed to fetch products"
            );
        }

        const products =
            await response.json();

        console.log(
            "Products Loaded:",
            products
        );

        renderProducts(products);

    } catch (error) {

        console.error(
            "Fetch Error:",
            error.message
        );

        productContainer.innerHTML = `
            <div class="empty-state">
                Error loading products
            </div>
        `;
    }
}

/**
 * Render products dynamically
 */

function renderProducts(products) {

    /**
     * Empty State
     */

    if (products.length === 0) {

        productContainer.innerHTML = `
            <div class="empty-state">
                No products available
            </div>
        `;

        return;
    }

    productContainer.innerHTML = "";

    products.forEach(product => {

        productContainer.innerHTML += `

            <div class="card">

                <img src="${product.imageUrl}"
                     alt="${product.name}">

                <h2>${product.name}</h2>

                <p>${product.description}</p>

                <h3>₱${product.price}</h3>

            </div>

        `;
    });
}

/**
 * Load products when page opens
 */

fetchProducts();