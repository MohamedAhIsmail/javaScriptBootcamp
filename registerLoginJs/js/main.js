let account = JSON.parse(localStorage.getItem("user"));

let sign = document.querySelector(".sign .btns");
let user = document.querySelector(".account");
let title = user.querySelector("p");
if (account) {
  sign.classList.add("newActive");
  user.classList.remove("newActive");
  title.innerHTML = `Welcome ${account.firstName} ${account.lastName}`;
} else {
}

function signOut() {
  sign.classList.remove("newActive");
  user.classList.add("newActive");
  window.localStorage.clear();
  setTimeout(() => {
    window.location.href = "signin.html";
  }, 1500);
}
