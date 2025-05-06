let header = document.createElement("header");
let logo = document.createElement("h1");
let ul = document.createElement("ul");
let logoText = document.createTextNode("Elzero");
let lis = ["Home", "About", "Service", "Contact"];

logo.appendChild(logoText);
header.appendChild(logo);
header.appendChild(ul);

for (let i = 0; i < lis.length; i++) {
  let li = document.createElement("li");
  li.textContent = lis[i];
  li.style.cssText = "color:#ACB6BD;";
  ul.appendChild(li);
}

document.body.appendChild(header);

let allElements = document.querySelectorAll("*");
allElements.forEach((el) => {
  el.style.padding = "0";
  el.style.margin = "0";
});

document.body.style.background = "#eee";
document.body.style.fontFamily = "Tahoma, Arial";
header.style.cssText =
  "background-color : #fff; display: flex; justify-content: space-between; align-items:center; padding: 5px 20px";
logo.style.cssText = "color:#23A96E; margin: 0";
ul.style.cssText =
  "display: flex; list-style: none; gap: 10px; align-items:center;";

let mainDiv = document.createElement("main");

let counter = 1;
for (let i = 0; i < 15; i++) {
  let div = document.createElement("div");
  let p = document.createElement("p");
  let span = document.createElement("span");
  let spanText = document.createTextNode("Product");
  div.setAttribute("class", "product");
  span.appendChild(spanText);
  span.style.cssText = "color: #ACB6BD;";
  div.appendChild(p);
  p.innerHTML = counter++;
  div.appendChild(span);
  mainDiv.appendChild(div);
  document.body.appendChild(mainDiv);
  mainDiv.style.cssText =
    "display: flex; flex-wrap: wrap; justify-content: space-evenly; padding-top: 20px";
  div.style.cssText =
    "padding: 10px; background-color: #fff; width: calc(100% / 3 - 40px); margin-bottom: 20px; text-align: center; border-radius: 5px; font-size: 20px; ";
}

let footer = document.createElement("footer");
let copyright = document.createTextNode("Copyright © 2025");

footer.appendChild(copyright);
footer.style.cssText =
  "background-color: #23A96E; padding: 10px; text-align: center; color: #fff;";
document.body.appendChild(footer);
