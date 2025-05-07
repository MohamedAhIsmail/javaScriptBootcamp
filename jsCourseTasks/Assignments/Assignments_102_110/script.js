// task 1

// let input = window.prompt("Print Number From - To : “Example: 5-20”");

// function printNums() {
//   let parts = input.split("-");
//   let from = Number(parts[0]);
//   let to = Number(parts[1]);

//   if (from > to) {
//     [from, to] = [to, from];
//   }

//   for (let i = from; i <= to; i++) {
//     let div = document.createElement("div");
//     div.innerHTML += i;
//     document.body.appendChild(div);
//   }
// }

// printNums();

// task 2

function popUp() {
  let div = document.createElement("div");
  div.setAttribute("class", "pop");
  let h3 = document.createElement("h3");
  let h3Text = document.createTextNode("Welcome");
  h3.appendChild(h3Text);
  let p = document.createElement("p");
  let pText = document.createTextNode("Welcome To Elzero Web School");
  p.appendChild(pText);
  let close = document.createElement("div");
  let x = document.createTextNode("X");
  close.appendChild(x);
  close.setAttribute("class", "close");
  div.appendChild(h3);
  div.appendChild(p);
  div.append(close);
  document.body.appendChild(div);
}

// popUp();

setTimeout(() => {
  popUp();
  let pop = document.querySelector(".pop");
  let close = document.querySelector(".close");

  close.addEventListener("click", () => {
    pop.remove();
  });
}, 5000);

//Task 3

// let count = document.querySelector(".count");

// console.log(count);

// let counter = setInterval(() => {
//   count.innerHTML = --count.innerHTML;
//   if (count.innerHTML === "0") {
//     clearInterval(counter)
//   }
// }, 1000);

// Task 4

// let count = document.querySelector(".count");

// console.log(count);

// let counter = setInterval(() => {
//   count.innerHTML = --count.innerHTML;
//   if (count.innerHTML === "0") {
//     clearInterval(counter);
//     // window.location.href = "https://elzero.org";
//   }
// }, 1000);

let count = document.querySelector(".count");

console.log(count);

let counter = setInterval(() => {
  count.innerHTML = --count.innerHTML;
  if (count.innerHTML === "0") {
    clearInterval(counter);
    window.open("https://elzero.org", "", "_self", "width =200, height =200, top= 100, right= 100");
  }
}, 1000);
