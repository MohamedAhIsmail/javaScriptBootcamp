// window.alert("hello");
// console.log("hello");
// document.write("sdadasdasda");
// let div = document.querySelector("div").innerText= "1111111";
// console.log(div);
// console.log("ali" + 10 + 10 +20 + 40)
// console.log(10+ 10 + "ali" + 10 +20 + 40)
// console.log(2 ** 3);
// var num  = 5
// console.log(num++);
// console.log(num);
// console.log(++num);

console.log(2 * "4");
console.log(8 / "2");
console.log("8" % "2");
console.log("2" - "2");

// let num = "12"

// console.log(typeof +num);

let num2 = document.getElementById("demo").value;

let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(typeof num2);
  document.getElementById("demo").value = "";
});

// console.log(num2);

// let name = window.prompt("write your name")

// console.log(typeof +name);

console.log(-"-asdasd");
console.log(-"+123");

console.log(Number("ali"));
console.log(Number(""));
console.log(Number("         "));

console.log(Number(undefined));

console.log(typeof undefined);

console.log(typeof +undefined);
console.log(Number(+undefined));
console.log(true - false);
console.log(true);
console.log(15 == 15);
console.log(15 != 15);
console.log(15 !== "15");

console.log(!(10 > 10));

