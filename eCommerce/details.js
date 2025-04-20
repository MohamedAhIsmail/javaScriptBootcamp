let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
let cartCounter = document.querySelector(".cart");

function displayCounter() {
  cartCounter.innerHTML = cartItems.length;
}

displayCounter();

let detailsContainer = document.getElementById("details");

function getDetails() {
  singleProduct = JSON.parse(window.localStorage.getItem("singleProduct"));
  console.log(singleProduct);
  let details = ``;

  details = `
          <div class="image">
            <img src="${singleProduct.img}" alt="">
          </div>
          <div class="info">
            <h2 class="title">${singleProduct.name}</h2>
            <p class="price">$${singleProduct.price}</p>
          </div>
  
  `;

  detailsContainer.innerHTML = details
}

getDetails();
