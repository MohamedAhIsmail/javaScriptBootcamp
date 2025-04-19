let products = [
  {
    name: "Addaptor Laptop 2025",
    img: "./images/add.png",
    price: 1000,
  },
  {
    name: "PC Case 2025",
    img: "./images/case.png",
    price: 2000,
  },
  {
    name: "Asus gaming Laptop 2025",
    img: "./images/lap-asus.png",
    price: 3000,
  },
  {
    name: "MSI Laptop 2025",
    img: "./images/lapmsi.png",
    price: 4000,
  },
  {
    name: "Black Laptop 2025",
    img: "./images/laptop-black.png",
    price: 5000,
  },
  {
    name: "Zen Laptop 2025",
    img: "./images/laptop-zen.png",
    price: 6000,
  },
  {
    name: "Addaptor Laptop 2025",
    img: "./images/laptop.png",
    price: 7000,
  },
  {
    name: "Addaptor Laptop 2025",
    img: "./images/laptopo.png",
    price: 8000,
  },
  {
    name: "Addaptor Laptop 2025",
    img: "./images/new-lap.png",
    price: 9000,
  },
  {
    name: "Addaptor Laptop 2025",
    img: "./images/pc-build.png",
    price: 10000,
  },
  {
    name: "Addaptor Laptop 2025",
    img: "./images/pc.png",
    price: 11000,
  },
  {
    name: "Addaptor Laptop 2025",
    img: "./images/ram.png",
    price: 12000,
  },
];
let cart = JSON.parse(window.localStorage.getItem("cart")) || [];
let container = document.getElementById("products");
let searchInput = document.getElementById("search");
let cartCounter = document.querySelector(".cart");

function displayProducts() {
  let product = ``;

  for (let i = 0; i < products.length; i++) {
    if (
      products[i].name
        .toLocaleLowerCase()
        .includes(searchInput.value.toLowerCase())
    ) {
      product += `
      <div class="product">
        <img src="${products[i].img}" alt="${products[i].name}">
        <h2>${products[i].name}</h2>
        <p>$${products[i].price}</p>
        <div class="btns">
          <button class="btn addToCart" onclick="addToCart(${i})">Add to Cart</button>
          <button class="btn">Details</button>
        </div>
      </div>
  `;
    }
  }

  container.innerHTML = product;
}

displayProducts();

searchInput.addEventListener("input", displayProducts);

function addToCart(i) {
  cart.push(products[i]);
  console.log(cart);

  cartCounter.innerHTML = cart.length;
  saveData();
}

function saveData() {
  window.localStorage.setItem("cart", JSON.stringify(cart));
}

function displayCounter() {
  cartCounter.innerHTML = cart.length;
}

displayCounter();
