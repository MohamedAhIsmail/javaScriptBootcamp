// let myP = document.querySelector(".my");

// myP.addEventListener("click", () => {
//   let newP = myP.cloneNode(true);
//   document.body.appendChild(newP)
// });





// Task 3

// let p = document.querySelector("p");
// p.remove();

// let mainDiv = document.querySelector(".our-element");

// let start = document.createElement("div");
// start.className = "start";
// start.setAttribute("title", "Start Element");
// start.setAttribute("data-value", "Start");
// start.innerText = "Start";

// let end = document.createElement("div");
// end.className = "end"
// end.textContent = "End"
// end.setAttribute("title", "End Element")
// end.setAttribute("data-value", "End")
// mainDiv.before(start);
// mainDiv.after(end)




// task 4

// let theDiv = document.querySelector("div")
// console.log(theDiv.childNodes[4].textContent.trim());



// task 5

document.addEventListener("click", (e)=>{
  console.log(`This Is Element Type: ${e.target.nodeName}`);
  
})