let form = document.querySelector(".todoForm");
let input = document.getElementById("input");
let tasks = document.querySelector(".tasks");

let task = ""
function addTask(){
  let taskData = input.value

  task += `
    <div class="task">${taskData}</div>
  `
  console.log(taskData)
  tasks.innerHTML = task
  taskData = input.value = ""
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask()
  
});

console.log(form);
console.log(input);
console.log(submit);
console.log(tasks);
