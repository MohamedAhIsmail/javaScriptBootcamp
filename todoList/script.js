let input = document.getElementById("taskInput");
let add = document.getElementById("btn");
let edite = document.getElementById("edite");
let deleteBtn = document.getElementById("delete");
let ul = document.getElementById("ul");
let tasks = [];

if (window.localStorage.getItem("tasks")) {
  tasks = JSON.parse(window.localStorage.getItem("tasks"));
  console.log(tasks);
}

displayTasks();

add.addEventListener("click", () => {
  if (input.value == "" ) {
    alert("Please Add Tasks First!")
  } else {
    let task = {
      name: input.value,
    };

    tasks.push(task);
    empty();
    displayTasks();
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});

function empty() {
  input.value = "";
}

function displayTasks() {
  let task = ``;

  for (let i = 0; i < tasks.length; i++) {
    task += `
        <li onclick="checkTask(${i})" id="task">
              <div class="task">
                <h3>${tasks[i].name}</h3>
                <div>
                  <button class="edite" id="edite">Edite</button>
                  <button onclick="deleteTask(${i})" class="delete" id="delete">Delete</button>
                </div>
              </div>
            </li>
    `;
  }

  ul.innerHTML = task;
}

function deleteTask(i) {
  tasks.splice(i, 1);
  window.localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

// function checkTask() {
//   let task = document.getElementById("task");

//   task.style.textDecoration = "line-through";
// }
