// let test = document.getElementsByClassName("test")

// console.log(test);



// document.addEventListener("click", (e)=>{
//   e.target.style.color = "red"
// })


let childs = document.querySelectorAll(".child")

console.log(childs);



  for(let i = 0; i< childs.length; i++){
    // childs[i].addEventListener("click", function(e){
    //   e.target.classList.add("new")
    // })

    // childs[i].addEventListener("mousedown", function(){
    //   childs[i].style.height = "300px"
    // })
    childs[i].addEventListener("dblclick", function(){
      childs[i].style.height = "300px"
    })
    childs[i].addEventListener("mouseup", function(){
      childs[i].style.height = "50px"
    })
  }

  document.addEventListener("contextmenu", (e)=>{
    // e.preventDefault()
  })
