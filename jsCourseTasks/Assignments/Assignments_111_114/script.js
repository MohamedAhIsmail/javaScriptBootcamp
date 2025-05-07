// Colors practice

let lis = document.querySelectorAll("ul li");
let mainColor = document.querySelector(".main-color");

if (window.localStorage.getItem("color")) {
  theColor = window.localStorage.getItem("color");
  mainColor.style.backgroundColor = theColor;
  lis.forEach((li) => {
    li.classList.remove("active");
  });

  document
    .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    lis.forEach((li) => {
      li.classList.remove("active");
    });

    e.currentTarget.classList.add("active");
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    mainColor.style.backgroundColor = e.currentTarget.dataset.color;
  });
});
