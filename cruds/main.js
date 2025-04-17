var pName = document.getElementById("productName");
var pPrice = document.getElementById("productPrice");
var pCat = document.getElementById("productCat");
var pDesc = document.getElementById("productDesc");
var searchInput = document.getElementById("search");
var btn = document.getElementById("btn");
var updateBtn = document.getElementById("btnUpdate");

var index = 0;

var productsList = [];
if (window.localStorage.getItem("Products")) {
  productsList = JSON.parse(window.localStorage.getItem("Products"));
  displayProducts();
}

btn.addEventListener("click", function addProduct() {
  if (pName.value != "" && pPrice.value != "" && pCat.value != "" && pDesc.value != "") {
    var product = {
      productName: pName.value,
      productPrice: pPrice.value,
      productCat: pCat.value,
      productDesc: pDesc.value,
    };

    productsList.push(product);
    console.log(productsList);
    displayProducts();
    emptyInputs();
    window.localStorage.setItem("Products", JSON.stringify(productsList));
  }
});

// function displayProducts() {
//   var item = "";
//   for (var i = 0; i < productsList.length; i++) {
//     item += `
//         <tr>
//             <td>${i + 1}</td>
//             <td>${productsList[i].productName}</td>
//             <td>${productsList[i].productPrice}</td>
//             <td>${productsList[i].productCat}</td>
//             <td>${productsList[i].productDesc}</td>
//             <td><button onclick="updateProduct(${i})" class="btn btn-outline-warning">Update</button></td>
//             <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button></td>
//           </tr>
//     `;
//   }
//   document.getElementById("tbody").innerHTML = item;
// }

function displayProducts() {
  var item = "";
  for (var i = 0; i < productsList.length; i++) {
    if (
      productsList[i].productName
        .toLowerCase()
        .startsWith(searchInput.value.toLowerCase()) ||
      productsList[i].productCat
        .toLowerCase()
        .startsWith(searchInput.value.toLowerCase())
    ) {
      item += `
          <tr>
            <td>${i + 1}</td>
            <td>${productsList[i].productName}</td>
            <td>${productsList[i].productPrice}</td>
            <td>${productsList[i].productCat}</td>
            <td>${productsList[i].productDesc}</td>
            <td><button onclick="updateProduct(${i})" class="btn btn-outline-warning">Update</button></td>
            <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button></td>
          </tr>
      `;
    }
  }

  document.getElementById("tbody").innerHTML = item;
}

function deleteProduct(i) {
  productsList.splice(i, 1);
  displayProducts();
  window.localStorage.setItem("Products", JSON.stringify(productsList));
}

function updateProduct(i) {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  updateBtn.classList.remove("d-none");
  btn.classList.add("d-none");

  pName.value = productsList[i].productName;
  pPrice.value = productsList[i].productPrice;
  pCat.value = productsList[i].productCat;
  pDesc.value = productsList[i].productDesc;

  index = i;

  console.log(index);
}

updateBtn.addEventListener("click", () => {

  if (pName.value != "" && pPrice.value != "" && pCat.value != "" && pDesc.value != ""){
    var product = {
      productName: pName.value,
      productPrice: pPrice.value,
      productCat: pCat.value,
      productDesc: pDesc.value,
    };
  
    productsList.splice(index, 1, product);
    console.log(product);
    emptyInputs();
    displayProducts();
    window.localStorage.setItem("Products", JSON.stringify(productsList));
    btn.classList.remove("d-none");
    updateBtn.classList.add("d-none");
  }
});

function emptyInputs() {
  pName.value = "";
  pPrice.value = "";
  pCat.value = "";
  pDesc.value = "";
}
