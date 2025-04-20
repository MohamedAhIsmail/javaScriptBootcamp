let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
let cartCounter = document.querySelector(".cart");

function displayCounter() {
  cartCounter.innerHTML = cartItems.length;
}
displayCounter();

let detailsContainer = document.getElementById("details");

function getDetails() {
  const singleProduct = JSON.parse(localStorage.getItem("singleProduct"));
  console.log(singleProduct);

  let details = `
    <div class="image">
      <img src="${singleProduct.img}" alt="">
    </div>
    <div class="info">
      <h2 class="title">${singleProduct.name}</h2>
      <p class="price">$${singleProduct.price}</p>
      <p class="desc">${singleProduct.desc || "No description available."}</p>
      <button class="btn addToCart">Add to Cart</button>
    </div>
  `;

  detailsContainer.innerHTML = details;

  document.querySelector(".addToCart").addEventListener("click", function () {
    const alreadyInCart = cartItems.find(
      (item) => item.name === singleProduct.name
    );
    if (!alreadyInCart) {
      cartItems.push(singleProduct);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      cartCounter.innerHTML = cartItems.length;
    }
  });
}

getDetails();
