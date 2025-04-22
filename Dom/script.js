// let test = document.getElementsByClassName("test")

// console.log(test);

// document.addEventListener("click", (e)=>{
//   e.target.style.color = "red"
// })

let childs = document.querySelectorAll(".child");

// console.log(childs);

for (let i = 0; i < childs.length; i++) {
  // childs[i].addEventListener("click", function(e){
  //   e.target.classList.add("new")
  // })

  // childs[i].addEventListener("mousedown", function(){
  //   childs[i].style.height = "300px"
  // })
  childs[i].addEventListener("dblclick", function () {
    childs[i].style.height = "300px";
  });
  childs[i].addEventListener("mouseup", function () {
    childs[i].style.height = "50px";
  });
}

// document.addEventListener("contextmenu", (e) => {
//   // e.preventDefault()
// });

// let btn = document.querySelector("button");
// console.log(btn);

// btn.onclick = function () {
//   document.querySelector("h3").style.color = "tomato";
// };

// btn.onclick = function () {
//   console.log("hllow");
// };

// btn.addEventListener("click", function () {
//   console.log("hey");
// });

// btn.addEventListener("click", () => {
//   document.querySelector("h3").style.color = "green";
// });

// let grad = document.querySelector(".grad");

// console.log(grad);

// window.onscroll = function () {
//   console.log(window.scrollY);
//   if (window.scrollY == 100) {
//     grad.style.width = "100%";
//   }
// };

// slider

// let imgArr = ["Image1", "Image2 ", "Image3", "Image4", "Image5"];

// let images = document.querySelector(".images");

// let prev = document.querySelector(".prev");

// let next = document.querySelector(".next");

// console.log(imgArr, images, prev, next);

// for (let i = 0; i < imgArr.length; i++) {
//   index = imgArr[i]
//   next.addEventListener("click", ()=>{
//     document.querySelector(".img").innerHTML = `${imgArr[i+1]}`
//   })
// }

// let images = document.querySelectorAll(".item img");
let images = Array.from(document.querySelectorAll(".item img"));
let overlay = document.querySelector(".overlay");
let closeBtn = document.getElementById("close");
let imageInside = document.querySelector(".imageInside");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

// console.log();

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function (e) {
    imageInside.style.backgroundImage = `url(${images[i].getAttribute("src")})`;
    console.log(images[i].getAttribute("src"));

    overlay.classList.remove("d-none");
  });
}

closeBtn.addEventListener("click", () => {
  overlay.classList.add("d-none");
});

next.addEventListener("click", () => {
  
  
});
