let products = [
  {
    name: "Addaptor Laptop 2025",
    img: "./images/add.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem unde suscipit nemo distinctio, repellendus quas. Pariatur illo sequi reiciendis harum corrupti! Molestias, nisi quia similique at, error explicabo minus exercitationem qui deserunt enim molestiae atque ipsam sapiente quod quasi et sint cupiditate perspiciatis libero neque ducimus maxime reiciendis excepturi. Laborum!",
    price: 1000,
  },
  {
    name: "PC Case 2025",
    img: "./images/case.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem unde suscipit nemo distinctio, repellendus quas. Pariatur illo sequi reiciendis harum corrupti! Molestias, nisi quia similique at, error explicabo minus exercitationem qui deserunt enim molestiae atque ipsam sapiente quod quasi et sint cupiditate perspiciatis libero neque ducimus maxime reiciendis excepturi. Laborum!",
    price: 2000,
  },
  {
    name: "Asus gaming Laptop 2025",
    img: "./images/lap-asus.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem unde suscipit nemo distinctio, repellendus quas. Pariatur illo sequi reiciendis harum corrupti! Molestias, nisi quia similique at, error explicabo minus exercitationem qui deserunt enim molestiae atque ipsam sapiente quod quasi et sint cupiditate perspiciatis libero neque ducimus maxime reiciendis excepturi. Laborum!",
    price: 3000,
  },
  {
    name: "MSI Laptop 2025",
    img: "./images/lapmsi.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem unde suscipit nemo distinctio, repellendus quas. Pariatur illo sequi reiciendis harum corrupti! Molestias, nisi quia similique at, error explicabo minus exercitationem qui deserunt enim molestiae atque ipsam sapiente quod quasi et sint cupiditate perspiciatis libero neque ducimus maxime reiciendis excepturi. Laborum!",
    price: 4000,
  },
  {
    name: "Black Laptop 2025",
    img: "./images/laptop-black.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem unde suscipit nemo distinctio, repellendus quas. Pariatur illo sequi reiciendis harum corrupti! Molestias, nisi quia similique at, error explicabo minus exercitationem qui deserunt enim molestiae atque ipsam sapiente quod quasi et sint cupiditate perspiciatis libero neque ducimus maxime reiciendis excepturi. Laborum!",
    price: 5000,
  },
  {
    name: "Zen Laptop 2025",
    img: "./images/laptop-zen.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem unde suscipit nemo distinctio, repellendus quas. Pariatur illo sequi reiciendis harum corrupti! Molestias, nisi quia similique at, error explicabo minus exercitationem qui deserunt enim molestiae atque ipsam sapiente quod quasi et sint cupiditate perspiciatis libero neque ducimus maxime reiciendis excepturi. Laborum!",
    price: 6000,
  },
  {
    name: "Lenovo Laptop 2025",
    img: "./images/laptop.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem unde suscipit nemo distinctio, repellendus quas. Pariatur illo sequi reiciendis harum corrupti! Molestias, nisi quia similique at, error explicabo minus exercitationem qui deserunt enim molestiae atque ipsam sapiente quod quasi et sint cupiditate perspiciatis libero neque ducimus maxime reiciendis excepturi. Laborum!",
    price: 7000,
  },
  {
    name: "Silver Laptop 2025",
    img: "./images/laptopo.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem unde suscipit nemo distinctio, repellendus quas. Pariatur illo sequi reiciendis harum corrupti! Molestias, nisi quia similique at, error explicabo minus exercitationem qui deserunt enim molestiae atque ipsam sapiente quod quasi et sint cupiditate perspiciatis libero neque ducimus maxime reiciendis excepturi. Laborum!",
    price: 8000,
  },
  {
    name: "Microsoft Laptop 2025",
    img: "./images/new-lap.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem unde suscipit nemo distinctio, repellendus quas. Pariatur illo sequi reiciendis harum corrupti! Molestias, nisi quia similique at, error explicabo minus exercitationem qui deserunt enim molestiae atque ipsam sapiente quod quasi et sint cupiditate perspiciatis libero neque ducimus maxime reiciendis excepturi. Laborum!",
    price: 9000,
  },
  {
    name: "PC Bundle RGB",
    img: "./images/pc-build.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem unde suscipit nemo distinctio, repellendus quas. Pariatur illo sequi reiciendis harum corrupti! Molestias, nisi quia similique at, error explicabo minus exercitationem qui deserunt enim molestiae atque ipsam sapiente quod quasi et sint cupiditate perspiciatis libero neque ducimus maxime reiciendis excepturi. Laborum!",
    price: 10000,
  },
  {
    name: "Gaming PC 2025",
    img: "./images/pc.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem unde suscipit nemo distinctio, repellendus quas. Pariatur illo sequi reiciendis harum corrupti! Molestias, nisi quia similique at, error explicabo minus exercitationem qui deserunt enim molestiae atque ipsam sapiente quod quasi et sint cupiditate perspiciatis libero neque ducimus maxime reiciendis excepturi. Laborum!",
    price: 11000,
  },
  {
    name: "RAM 2 X 16 2025",
    img: "./images/ram.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem unde suscipit nemo distinctio, repellendus quas. Pariatur illo sequi reiciendis harum corrupti! Molestias, nisi quia similique at, error explicabo minus exercitationem qui deserunt enim molestiae atque ipsam sapiente quod quasi et sint cupiditate perspiciatis libero neque ducimus maxime reiciendis excepturi. Laborum!",
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
          <a href="./Details.html"><button onclick="goDetails(${i})" class="btn">Details</button></a>
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
  const alreadyInCart = cart.find((item) => item.name === products[i].name);
  if (!alreadyInCart) {
    cart.push(products[i]);
    console.log(cart);
    cartCounter.innerHTML = cart.length;
    saveData();
  }
}

function saveData() {
  window.localStorage.setItem("cart", JSON.stringify(cart));
}

function displayCounter() {
  cartCounter.innerHTML = cart.length;
}

displayCounter();

function goDetails(i) {
  console.log(products[i]);

  window.localStorage.setItem("singleProduct", JSON.stringify(products[i]));
}
