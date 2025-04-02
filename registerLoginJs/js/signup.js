import { sweetAlertValid } from "./sweetAlert-Valid.js";

function emptyForm() {
  let firstName = (document.getElementById("firstName").value = "");
  let lastName = (document.getElementById("lastName").value = "");
  let email = (document.getElementById("email").value = "");
  let password = (document.getElementById("password").value = "");
}

function SignUp() {
  let firstName = document.getElementById("firstName").value.trim();
  let lastName = document.getElementById("lastName").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  if (firstName !== "" && lastName !== "" && email !== "" && password !== "") {
    sweetAlertValid("The Form is valid!", "green");

    emptyForm();

    saveInLocalStorage(firstName, lastName, email, password);

    setTimeout(() => {
      window.location.href = "signIn.html";
    }, 1500);
  } else {
    sweetAlertValid("Please Enter Your Info", "red");
  }
}

function saveInLocalStorage(firstName, lastName, email, password) {
  window.localStorage.setItem(
    "user",
    JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    })
  );
}

let form = document.querySelector(".form form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  SignUp();
});
