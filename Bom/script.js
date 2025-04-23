let btn = document.querySelector("button");
console.log(btn);

let x = setTimeout(sayHello, 3000, "Mohamed");

function sayHello(name) {
  console.log(`hello ${name}`);
}

btn.addEventListener("click", function () {
  clearTimeout(x);
});

let y = setInterval(() => {
  document.querySelector("div").innerHTML =
    +document.querySelector("div").innerHTML + 1;
}, 1000);

// console.log(+document.querySelector("div").innerHTML +1);

btn.addEventListener("click", function () {
  clearInterval(y);
});

let minus = document.querySelector(".min");
let plus = document.querySelector(".plus");
let result = document.querySelector(".result");

console.log(minus, plus, result);

// setInterval(()=>{
//   result.innerHTML = +result.innerHTML + 1
// }, 1000)

plus.addEventListener("click", () => {
  result.innerHTML = +result.innerHTML + 1;
  minus.removeAttribute("disabled")
});


minus.addEventListener("click", () => {
  result.innerHTML = +result.innerHTML - 1;
  if(result.innerHTML == 0){
    minus.setAttribute("disabled", "disabled")
  } else {
    minus.removeAttribute("disabled")
  }
});

// btn.addEventListener("click", ()=> {
//   window.location.reload()
// })
