//State
const toDoList = {
  name: "list",
  createdAt: new Date(),
  tasks: [
    {
      id: 1,
      taskName: "Work on Python",
      taskDate: "2021-09-30",
      isCompleted: false,
    },
    {
      id: 2,
      taskName: "Submit Grad School Application",
      taskDate: "2021-09-30",
      isCompleted: false,
    },
    {
      id: 4,
      taskName: "Pay Rent and Termination Fee",
      taskDate: "2021-09-30",
      isCompleted: false,
    },
    {
      id: 5,
      taskName: "Learn more abouchatt Tailwind CSS and use it on Portfolio",
      taskDate: "2021-09-30",
      isCompleted: false,
    },
  ],
};

const myLists = () => `<h1>My Lists</h1>
<ul>
<li>List 1</li>
<li>List 2</li>
<li>List 3</li>
</ul>
`;
const settings =
  () => `<h1 class = 'text-xl' text-decoration-line: underline;>Settings</h1>
<ul>
<li>Colors</li>
<li>Styles</li>
<li>Layout</li>
</ul>
`;

//Modify State

function addTask(taskName, taskDate) {
  const newTask = {
    id: toDoList.tasks.length + 1,
    taskName: taskName,
    taskDate: taskDate,
    isCompleted: false,
    createdAt: new Date(),
  };
  toDoList.tasks.push(newTask);
}

function deleteTask(toDoList, taskId) {
  toDoList.tasks = toDoList.tasks.filter((task) => task.id !== taskId);
  return toDoList;
}

function markTaskAsCompleted(toDoList, taskId) {
  toDoList.tasks = toDoList.tasks.map((task) => {
    if (task.id === taskId) {
      task.isCompleted = true;
    }
    return task;
  });
  return toDoList;
}

//Render State
function renderToDoList(toDoList) {
  const listContainer = document.getElementById("task-list");
  listContainer.innerHTML = "";
  toDoList.tasks.forEach((task) => {
    const taskElement = document.createElement("li");
    taskElement.setAttribute(
      "class",
      "class = hover:bg-green-200 text-black subpixel-antialiased py-5 px-8 rounded"
    );
    taskElement.innerText = `${task.taskName} - ${task.taskDate}`;
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute(
      "class",
      "class = hover:bg-red-400 hover:scale-110 transition-transform text-black font-bold py-2 px-4 rounded "
    );
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteTask(toDoList, task.id);
      renderToDoList(toDoList);
    });
    taskElement.appendChild(deleteButton);
    listContainer.appendChild(taskElement);
  });
}

//Script
/*
const addButton = document.getElementById("add-button");
addButton.addEventListener("click", () => {
  const taskName = prompt("Enter task name:");
  const taskDate = prompt("Enter task date:");

  if (taskName && taskDate) {
    addTask(taskName, taskDate);
    renderToDoList(toDoList);
  }
});
*/
renderToDoList(toDoList);
/*write a function that sets a timer for each task of 30 minutes
const timer = (task) => {
  setTimeout(() => {
    alert(`Time is up for ${task.taskName}`);
  }, 1000 * 60 * 30);
};
console.log(timer(toDoList.tasks[0]));
*/

const taskForm = document.getElementById("task-form");
taskForm.addEventListener("submit", (event) => {
  event.preventDefault(); //the page will not reload
  const taskName = document.getElementById("task-name").value;
  const taskDate = document.getElementById("task-date").value;
  const errorMessage = document.getElementById("error-message");
  errorMessage.innerText = "";
  if (taskName.value === "" || taskDate.value === "") {
    errorMessage.innerText = "Task Name and Task Date are required";
    return;
  }
  addTask(taskName, taskDate);
  renderToDoList(toDoList);
  taskForm.reset();
});

function router() {
  const content = document.getElementById("task-list");
  const route = window.location.hash;

  const routes = {
    "#myLists": myLists,
    "#Settings": settings,
    "#toDoList": toDoList,
  };

  content.innerHTML = routes[route]
    ? routes[route]()
    : "<h1>404 - Page not Found</h1>";
}

window.addEventListener("hashchange", router);

window.addEventListener("load", router);
