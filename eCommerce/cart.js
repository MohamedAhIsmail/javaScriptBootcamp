let cartContainer = document.querySelector(".products");
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
let cartCounter = document.querySelector(".cart");

let deleteAll = document.querySelector(".deleteAll")
let deleteBtn = document.querySelector(".delete")

function displayCartItems() {
  let content = "";

  if (cartItems.length === 0) {
    content = "<p>Your cart is empty.</p>";
    if (deleteAll) deleteAll.style.display = "none";
  } else {
    if (deleteAll) deleteAll.style.display = "block";
    for (let i = 0; i < cartItems.length; i++) {
      content += `
        <div class="product">
          <img src="${cartItems[i].img}" alt="${cartItems[i].name}">
          <h2>${cartItems[i].name}</h2>
          <p>$${cartItems[i].price}</p>
          <div class="btns">
          <button class="btn addToCart" onclick="deleteProduct(${i})">Delete</button>
        </div>
        </div>
      `;
    }
  }

  cartContainer.innerHTML = content;
}

displayCartItems();

function displayCounter() {
  cartCounter.innerHTML = cartItems.length;
}

displayCounter();


function deleteProduct(i) {
  cartItems.splice(i, 1)
  console.log(cartItems);

  window.localStorage.setItem("cart", JSON.stringify(cartItems))
  displayCounter()
  displayCartItems() 
}


deleteBtn.addEventListener("click", ()=> {
  window.localStorage.removeItem("cart")
  cartItems = [];
    displayCounter();
    displayCartItems();
})