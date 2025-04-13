// document.getElementById("title").style.color = "red";

// let card = document.getElementById("card");

// card.addEventListener("click", function () {
//   let x = Math.random() * 100;
//   card.style.rotate = `${x}deg`;
// });

//spread

// function test(...numbers) {
//   console.log(numbers)
// }

// test(1, "ads", "s", 1, 2 , "sdasd")

let h2 = document.querySelectorAll("h2");
console.log(h2); //node list

let div = document.getElementsByClassName("container");
console.log(div); //HTMLCollection

// console.log(y);
// let y = Math.random() * 10;

// const x = 100
// console.log(x)

// var x = 20;
// function test() {
//   if (true) {
//     var x = 10;
//   }
//   console.log(x);
// }
// console.log(x);

// test();

// function newF() {
//   if (true) {
//     let z = 100;
//     console.log(z);
//   }
// }
// newF();

// function third() {
//   if (true) {
//     const f = 223;
//     console.log(f);
//   }
// }
// third();

// if(true){
//   const m = 100
// }

// console.log(m);

// const person = {
//   name: "mohamed",
//   age: 24,
// };

// person.name = "ali";

// console.log(person);

// const c;

// console.log(c);

// let a;

// var c;

// console.log(a);

// console.log(c);

console.log(typeof (10 / 0));
console.log(typeof NaN);
console.log(0.1 + 0.6);

console.log(9999999999999999);

console.log((5).toString(2)); //binary

let one = "mohamed";

one[2] = "aa";

console.log(one[one.length - 1]); //last index

const arr = ["mohamed", "ahmed", "ali"];

arr[2] = "zero";

console.log(arr);

let mo = "mo|ham|ed";

console.log(mo.split("|"));

console.log("ace".repeat(3));

// console.log("heelo".charAt(8));

// console.log(Boolean());

// function test() {
//   return;
// }

// console.log(test());

// let toDay = new Date();

// console.log(toDay.toDateString());

// console.log(Date.now());

// const newfunc = function () {
//   console.log("hello World");
//   return "sd";
// };

// console.log(newfunc());

// let newSet = new Set([1, 1, 2, 3, 4, 5, 6, 7, 8, 88, 99, 9, 1, 10, 11, 11]);

// console.log(newSet);

// console.log(!!"hello");
// console.log(!!0);

// let obj1 = { name: "mohamed" };
// let obj2 = { name: "mohamed" };

// console.log(obj1 === obj2);

// let obj1 = "mohamed";
// let obj2 = "mohamed";

// console.log(obj1 === obj2);

// console.log(NaN === NaN);

// console.log(0 || 42);

// console.log("mohamed" || "mohamed AHmed");

let form = document.querySelector(".form");

let cards = document.querySelector(".cards");
function createPofile() {
  let name = document.getElementById("name").value.trim();
  let age = document.getElementById("age").value.trim();
  let hobbies = document.getElementById("hobbies").value.trim();

  const allHobbies = hobbies
    .split(",")
    .map((hobby) => hobby.trim())
    .filter((hobby) => hobby !== "");
  console.log(allHobbies);

  cards.innerHTML += `
                    <div class="card">
                      <h2>${name}</h2>
                      <p>${age}</p>
                      <ul>
                        ${allHobbies.map((hobby)=> `<li>${hobby.toUpperCase()}</li>`).join("")}
                      </ul>
                    </div>
  `;
}

function emptyPofile() {
  let name = (document.getElementById("name").value = "");
  let age = (document.getElementById("age").value = "");
  let hobbies = (document.getElementById("hobbies").value = "");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  createPofile();
  emptyPofile();
});
