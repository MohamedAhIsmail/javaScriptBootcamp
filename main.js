document.getElementById("title").style.color = "red";

let card = document.getElementById("card");

card.addEventListener("click", function () {
  let x = Math.random() * 100;
  card.style.rotate = `${x}deg`;
});

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


console.log(typeof (10/0))
console.log(typeof NaN)
console.log(0.1 + 0.6)

console.log(9999999999999999);

console.log((5).toString(2)); //binary
