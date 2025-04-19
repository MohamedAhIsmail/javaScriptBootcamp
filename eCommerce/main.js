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

console.log(products.length);

let container = document.getElementById("products");
function displayProducts() {
  let product = ``;

  for (let i = 0; i < products.length; i++) {
    product += `
        <div class="product">
            <img src="${products[i].img}" alt="${products[i].name}">
            <h2>${products[i].name}</h2>
            <p>$${products[i].price}</p>
            <div class="btns">
              <button class="btn">Add to Cart</button>
              <button class="btn">Details</button>
            </div>
          </div>
    `;
  }

  container.innerHTML = product;
}

displayProducts();
