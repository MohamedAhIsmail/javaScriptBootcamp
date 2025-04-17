let input = document.getElementById("taskInput");
let add = document.getElementById("add");
let ul = document.getElementById("ul");
let update = document.getElementById("update");
let tasks = [];
var index = 0;

if (window.localStorage.getItem("tasks")) {
  tasks = JSON.parse(window.localStorage.getItem("tasks"));
  console.log(tasks);
}

displayTasks();

add.addEventListener("click", () => {
  if (input.value.trim() === "") {
    alert("Please Add Tasks First!");
  } else {
    let task = {
      name: input.value,
      isCompleted: false,
    };

    tasks.push(task);
    empty();
    displayTasks();
    saveTasks();
  }
});

function empty() {
  input.value = "";
}

function saveTasks() {
  window.localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {
  let task = ``;

  if (tasks.length != 0) {
    for (let i = 0; i < tasks.length; i++) {
      task += `
              <li>
                <div class="task">
                  <h3 class="title" style="color: ${
                    tasks[i].isCompleted ? "green" : "black"
                  }; text-decoration: ${
        tasks[i].isCompleted ? "line-through" : "none"
      };" onclick="completeTask(${i})">${tasks[i].name}</h3>
                  <div class="btns">
                    <button onclick="editeTask(${i})" class="edite">Edite</button>
                    <button onclick="deleteTask(${i})" class="delete">Delete</button>
                  </div>
                </div>
              </li>
      `;
    }

    ul.innerHTML = task;
  } else {
    ul.innerHTML = `<div class="warning">Sorry! There are no tasks, Add your first Task.</div>`;
  }
}

function deleteTask(i) {
  tasks.splice(i, 1);
  saveTasks();
  displayTasks();
}

function editeTask(i) {
  add.classList.add("none");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  input.value = tasks[i].name;
  update.style.display = "block";
  index = i;
}

update.addEventListener("click", () => {
  if (input.value.trim() === "") {
    alert("Updated Task Can not be empty!");
  } else {
    let task = {
      name: input.value,
    };

    tasks.splice(index, 1, task);

    saveTasks();

    displayTasks();
    add.style.display = "block";
    update.style.display = "none";
    empty();
  }
});

function completeTask(i) {
  tasks[i].isCompleted = !tasks[i].isCompleted;
  saveTasks();

  displayTasks();
}
