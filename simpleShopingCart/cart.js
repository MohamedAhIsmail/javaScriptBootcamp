let cartArr = [];
let cartContainer = document.querySelector(".data");
console.log(cartContainer);

if (window.localStorage.getItem("cart")) {
  cartArr = JSON.parse(window.localStorage.getItem("cart"));
}

console.log(cartArr);

async function getProducts() {
  let allProducts = [];
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
                })" class="btn btn-danger w-100">Delete</button>
              </div>
            </div>
    `;
  }
  cartContainer.innerHTML = product;
}
