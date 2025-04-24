let cartArr = [];
let cartContainer = document.querySelector(".data");
allProducts = [];
// console.log(cartContainer);

if (window.localStorage.getItem("cart")) {
  cartArr = JSON.parse(window.localStorage.getItem("cart"));
}

// console.log(cartArr);

async function getProducts() {
  allProducts = [];
  for (let i = 0; i < cartArr.length; i++) {
    let data = await fetch(`https://fakestoreapi.com/products/${cartArr[i]}`);
    let product = await data.json();

    allProducts.push(product);
  }
  console.log(allProducts);

  showProducts(allProducts);
}

getProducts();

function showProducts(products) {
  let product = ``;

  if (cartArr == 0) {
    cartContainer.innerHTML = `
    <div class="text-center cart">
      <div class="empty fs-1">Your cart is empty!</div>
      <button class="btn btn-primary w-25 mt-3"><a href="./index.html">Go Home</a></button>
    </div>
  `;
  } else {
    for (let i = 0; i < products.length; i++) {
      product += `
            <div class="col-md-3">
              <div class="product bg-white rounded-1 p-3">
                <img class="w-100" src="${products[i].image}" alt="" />
                <h3 class="fs-5 mt-3">${products[i].title
                  .split(" ")
                  .slice(0, 3)
                  .join(" ")}</h3>
                <p class="desc m-0">${products[i].description
                  .split(" ")
                  .slice(0, 4)
                  .join(" ")}</p>
                <strong class="price d-block my-2 text-danger">$${
                  products[i].price
                }</strong>
                <button onclick="deleteProduct(${
                  products[i].id
                })" class="btn btn-danger w-100">Delete</button>
              </div>
            </div>
    `;
    }
    cartContainer.innerHTML = product;
  }
}

function deleteProduct(id) {
  allProducts = allProducts.filter((product) => product.id != id);
  cartArr = cartArr.filter((item) => item !== id);
  showProducts(allProducts);
  window.localStorage.setItem("cart", JSON.stringify(cartArr));
  updateCounter();
}

function updateCounter() {
  document.querySelector(".counter").innerHTML = cartArr.length;
}

updateCounter();
