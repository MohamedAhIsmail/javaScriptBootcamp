// Colors practice

// let lis = document.querySelectorAll("ul li");
// let mainColor = document.querySelector(".main-color");

// if (window.localStorage.getItem("color")) {
//   theColor = window.localStorage.getItem("color");
//   mainColor.style.backgroundColor = theColor;
//   lis.forEach((li) => {
//     li.classList.remove("active");
//   });

//   document
//     .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
//     .classList.add("active");
// }

// lis.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     lis.forEach((li) => {
//       li.classList.remove("active");
//     });

//     e.currentTarget.classList.add("active");
//     window.localStorage.setItem("color", e.currentTarget.dataset.color);
//     mainColor.style.backgroundColor = e.currentTarget.dataset.color;
//   });
// });

// Task 1

let selects = document.querySelectorAll("select");
let screen = document.querySelector(".screen");

if (window.localStorage.getItem("fontSize")) {
  screen.style.fontSize = `${window.localStorage.getItem("fontSize")}px`;
  let fontSize = window.localStorage.getItem("fontSize");
  document.querySelector('select[name="fontSize"]').value = fontSize;
}
if (window.localStorage.getItem("fontColor")) {
  let fontColor = window.localStorage.getItem("fontColor");
  screen.style.color = fontColor;
  document.querySelector('select[name="colors"]').value = fontColor;
}
if (window.localStorage.getItem("fontFamily")) {
  let fontFamily = window.localStorage.getItem("fontFamily");
  screen.style.fontFamily = `"${fontFamily}", sans-serif`;
  document.querySelector('select[name="font"]').value = fontFamily;
}

selects.forEach((el) => {
  el.addEventListener("change", () => {
    if (el.name === "fontSize") {
      window.localStorage.setItem("fontSize", el.value);
      screen.style.fontSize = `${el.value}px`;
    }
    if (el.name === "colors") {
      window.localStorage.setItem("fontColor", el.value);
      screen.style.color = el.value;
    }
    if (el.name === "font") {
      window.localStorage.setItem("fontFamily", el.value);
      screen.style.fontFamily = `"${el.value}", sans-serif`;
    }
  });
});

// task 2

let firstName = document.querySelector("[name='firstName']");
let lastName = document.querySelector("[name='lastName']");
let color = document.querySelector("[name='color']");
let elSelect = document.querySelector("[name='names']");
let form = document.querySelector("form");

if (window.sessionStorage.getItem("fName")) {
  firstName.value = window.sessionStorage.getItem("fName");
}
if (window.sessionStorage.getItem("lName")) {
  lastName.value = window.sessionStorage.getItem("lName");
}
if (window.sessionStorage.getItem("color")) {
  color.value = window.sessionStorage.getItem("color");
}
if (window.sessionStorage.getItem("select")) {
  elSelect.value = window.sessionStorage.getItem("select");
}

function saveSession() {
  window.sessionStorage.setItem("fName", firstName.value);
  window.sessionStorage.setItem("lName", lastName.value);
  window.sessionStorage.setItem("color", color.value);
  window.sessionStorage.setItem("select", elSelect.value);
}

function addSession() {
  form.addEventListener("input", () => {
    saveSession();
  });
}

addSession();
