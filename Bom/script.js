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
  document.querySelector("div").innerHTML += `${1}`
}, 1000);

btn.addEventListener("click", function() {
  clearInterval(y)
})
