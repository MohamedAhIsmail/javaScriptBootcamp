import { sweetAlertValid } from "./sweetAlert-Valid.js";

function emptyForm() {
  let email = (document.getElementById("email").value = "");
  let password = (document.getElementById("password").value = "");
}

function signIn() {
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  if (email !== "" && password !== "") {

    checkAccount(email, password)
    
    emptyForm(); 

  } else {

    sweetAlertValid("Please Enter Your Info", "red");
  }
}

function checkAccount(email , password) {
  let account = JSON.parse(localStorage.getItem("user")) || [];

  if(account.email === email && account.password === password){
    setTimeout(()=>{
      window.location.href = "home.html"
    }, 1500)

  } else {
    sweetAlertValid("Invalid info", "red");
  }
}

let form = document.querySelector(".form form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  signIn();
});