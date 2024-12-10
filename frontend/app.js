const API_URL = "http://localhost:9000/store/products";

async function fetchProducts() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    const productList = document.getElementById("product-list");
    data.products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");

      productDiv.innerHTML = `
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <p><strong>Price:</strong> $${(product.variants[0].prices[0].amount / 100).toFixed(2)}</p>
        <button onclick="addToCart('${product.id}')">Add to Cart</button>
      `;
      productList.appendChild(productDiv);
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

function addToCart(productId) {
  console.log("Added to cart:", productId);
  alert("Product added to cart!");
}

fetchProducts();
