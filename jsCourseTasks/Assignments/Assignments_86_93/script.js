// let div = document.createElement("div");
// div.className = "product";
// let heading = document.createElement("h3");
// let headingText = document.createTextNode("This is product name");
// let paragraph = document.createElement("p");
// let pText = document.createTextNode("Product description");
// heading.appendChild(headingText);
// paragraph.appendChild(pText);
// div.appendChild(heading);
// div.appendChild(paragraph);
// document.body.appendChild(div);
// console.log(div);

// for (let i = 0; i <= 100; i++) {
//   let div = document.createElement("div");
//   div.className = "product";
//   let heading = document.createElement("h3");
//   let headingText = document.createTextNode("This is product name");
//   let paragraph = document.createElement("p");
//   let pText = document.createTextNode("Product description");
//   heading.appendChild(headingText);
//   paragraph.appendChild(pText);
//   div.appendChild(heading);
//   div.appendChild(paragraph);
//   document.body.appendChild(div);
// }

// for (let i = 0; i < 30; i++) {
//   console.log("mohamed");
// }

// Task 1

// console.log(document.querySelector("div"));
// console.log(document.querySelector(".element"));
// console.log(document.querySelector('[name="js"]'));
// console.log(document.querySelector("#elzero"));
// console.log(document.querySelectorAll("div"));
// console.log(document.querySelectorAll(".element"));
// console.log(document.querySelectorAll("#elzero"));
// console.log(document.querySelectorAll('[class="element"]'));
// console.log(document.getElementById("elzero"));
// console.log(document.getElementsByName("js")[0]);
// console.log(document.getElementsByTagName("div")[0]);
// console.log(document.getElementsByClassName("element")[0]);
// console.log(document.body.children[0]);
// console.log(document.body.firstElementChild);
// console.log(document.getElementsByTagName("*")[6]);

// Task 2

// let imgs = document.querySelectorAll("img");

// for (let i = 0; i < imgs.length; i++) {
//   imgs[i].setAttribute(
//     "src",
//     "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
//   );
//   imgs[i].setAttribute("alt", "Elzero Logo");
// }

// task 3

let form = document.querySelector("form");
let input = document.querySelector('[type="number"]');
let resultDiv = document.querySelector(".result");

form.oninput = function () {
  let USD = input.value;

  if (USD === "") {
    resultDiv.innerHTML = "Please enter a value";
  } else {
    let EGP = (input.value * 15.6).toFixed(2);
    resultDiv.innerHTML = `{${USD}} USD Dollar = {${EGP}} Egyptian Pound`;
  }
};

// task 4

let oldOneDiv = document.querySelector(".one");
let oldTwoDiv = document.querySelector(".two");

console.log(oldOneDiv.className);

oldOneDiv.setAttribute("title", `${oldOneDiv.className}`);
oldOneDiv.innerHTML = oldTwoDiv.innerHTML;

oldTwoDiv.setAttribute("title", `${oldTwoDiv.className}`);
oldTwoDiv.innerHTML = `${oldTwoDiv.className
  .slice(0, 1)
  .toUpperCase()}${oldTwoDiv.className.slice(1)} 2`;
console.log(oldOneDiv, oldTwoDiv);

oldOneDiv.title =
  oldOneDiv.className === "one" ? oldTwoDiv.className : oldOneDiv.className;
oldTwoDiv.title =
  oldTwoDiv.className === "two" ? oldOneDiv.className : oldTwoDiv.className;

// let tempText = oldOneDiv.innerHTML;
// oldOneDiv.innerHTML = oldTwoDiv.innerHTML;
// oldTwoDiv.innerHTML = tempText + " " + oldTwoDiv.className.length;

let allDivImages = document.querySelectorAll(".last-div img");

for (let i = 0; i < allDivImages.length; i++) {
  if (allDivImages[i].getAttribute("alt")) {
    // console.log(allDivImages[i]);
    allDivImages[i].setAttribute("alt", "Old");
  } else {
    allDivImages[i].setAttribute("alt", "Elzero New");
  }
}

// console.log(allDivImages);

// Task 6

let formTwo = document.forms[1];
let results = document.querySelector(".results");
let inputNumber = document.querySelector('[name="elements"]');
let inputText = document.querySelector('[name="texts"]');
let selects = document.querySelector("select");
// console.log(results, inputNumber, inputText, selects);

// console.log(selects.value);

function createTheElements() {
  results.innerHTML = "";

  for (let i = 0; i < inputNumber.value; i++) {
    let theDiv = document.createElement(selects.value);
    let theText = document.createTextNode(inputText.value);
    theDiv.appendChild(theText);
    theDiv.className = "card"
    results.appendChild(theDiv);
  }

}

formTwo.onsubmit = function (e) {
  e.preventDefault();
  createTheElements();
};
