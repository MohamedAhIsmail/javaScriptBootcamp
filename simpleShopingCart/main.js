let dataContainer = document.querySelector(".data");
// console.log(dataContainer);

let productsArr = [];

if (window.localStorage.getItem("cart")) {
  productsArr = JSON.parse(window.localStorage.getItem("cart"));
}

async function getProducts() {
  let data = await fetch("https://fakestoreapi.com/products");
  let result = await data.json();

  console.log(result);
  showProducts(result);
}

getProducts();

function showProducts(products) {
  let product = ``;

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
                <button onclick="addToCart(${
                  products[i].id
                })" class="btn btn-success w-100">Add to Cart</button>
              </div>
            </div>
    `;
  }
  dataContainer.innerHTML = product;
}

function addToCart(id) {
  if (!productsArr.includes(id)) {
    productsArr.push(id);
  }
  saveData();
  updateCounter()
  console.log(productsArr);
}

function saveData() {
  window.localStorage.setItem("cart", JSON.stringify(productsArr));
}


function updateCounter() {
  document.querySelector(".counter").innerHTML = productsArr.length
}

updateCounter()