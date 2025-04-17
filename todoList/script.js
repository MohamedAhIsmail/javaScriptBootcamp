let input = document.getElementById("taskInput");
let add = document.getElementById("add");
let edite = document.getElementById("edite");
let deleteBtn = document.getElementById("delete");
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
  if (input.value == "") {
    alert("Please Add Tasks First!");
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

  if (tasks.length != 0) {
    for (let i = 0; i < tasks.length; i++) {
      task += `
              <li>
                <div class="task">
                  <h3>${tasks[i].name}</h3>
                  <div class="btns">
                    <button onclick="editeTask(${i})" class="edite" id="edite">Edite</button>
                    <button onclick="deleteTask(${i})" class="delete" id="delete">Delete</button>
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
  window.localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

function editeTask(i) {
  add.classList.add("none");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  input.value = tasks[i].name;
  update.classList.add("block");
  index = i;
}

update.addEventListener("click", () => {
  if (input.value == "") {
    alert("Updated Task Can not be empty!");
  } else {
    let task = {
      name: input.value,
    };

    tasks.splice(index, 1, task);

    window.localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();
    add.classList.remove("none");
    update.style.display = "none";
    empty();
  }
});
