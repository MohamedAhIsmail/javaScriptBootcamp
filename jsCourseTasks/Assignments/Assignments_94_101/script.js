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

// document.addEventListener("click", (e)=>{
//   console.log(`This Is Element Type: ${e.target.nodeName}`);

// })



// ta7ady

// let add = document.querySelector(".classes-to-add");
// let remove = document.querySelector(".classes-to-remove");
// let current = document.querySelector("[title = 'Current']");
// let cls = document.querySelector(".classes-list div");




// function toAddRemo() {

//   // remove all elements at the start
//   document.querySelectorAll("span").forEach((ele) => ele.remove());

//   for (let i = 0; i < this.value.trim().split(" ").length; i++) {
//     if (add.value) {
//       current.classList.add(add.value.toLowerCase().trim().split(" ")[i])
//     }

//     if (remove.value){
//       current.classList.remove(add.value.toLowerCase().trim().split(" ")[i])
//     }
//   }
//   this.value = ""

//   // add remove spans

//   if (current.classList.length) {
//     [...current.classList].sort().forEach(ele => {
//       let clSpan = document.createElement("span")
//       clSpan.textContent = ele;
      
//     })
//   } else {
//     clSpan.textContent = "No Classes To Show"
//   }
// }

// add.onblur = toAddRemo()
// remove.onblur = toAddRemo()





let add = document.querySelector(".classes-to-add");
let remove = document.querySelector(".classes-to-remove");
let current = document.querySelector("[title = 'Current']");
let cls = document.querySelector(".classes-list div");

function addOrRemove(){
    // remove all elements at the start
    document.querySelectorAll("span").forEach(el => el.remove());
    
    // add and remove classes
    for (let i = 0; i < this.value.trim().split(" ").length; i++){
        if (add.value)
            current.classList.add(add.value.toLowerCase().trim().split(" ")[i]);
        
        if (remove.value)
        
            current.classList.remove(remove.value.toLowerCase().trim().split(" ")[i]);
    }
    this.value = "";

    // add and remove spans
    if(current.classList.length){
        [...current.classList].sort().forEach(el => {
            let clSpan = document.createElement("span");
            clSpan.textContent = el;
            cls.append(clSpan);
        });
    }else cls.textContent = "No Classes To Show";
}

add.onblur = addOrRemove;
remove.onblur = addOrRemove;