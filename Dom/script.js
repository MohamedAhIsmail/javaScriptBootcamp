// let test = document.getElementsByClassName("test")

// console.log(test);



// document.addEventListener("click", (e)=>{
//   e.target.style.color = "red"
// })


let childs = document.querySelectorAll(".child")

console.log(childs);



  for(let i = 0; i< childs.length; i++){
    childs[i].addEventListener("click", function(e){
      e.target.classList.add("new")
    })
  }
