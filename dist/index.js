//State
const toDoList = {
  name: "list",
  createdAt: new Date(),
  tasks: [
    {
      id: 1,
      taskName: "Work on Python",
      isCompleted: false,
    },
    {
      id: 2,
      taskName: "Submit Grad School Application",
      isCompleted: false,
    },
    {
      id: 3,
      taskName: "Submit Job Application",
      isCompleted: false,
    },
    {
      id: 4,
      taskName: "Pay Rent and Termination Fee",
      isCompleted: false,
    },
    {
      id: 5,
      taskName: "Learn more about Tailwind CSS and use it on Portfolio",
      isCompleted: false,
    },
  ],
};

//Modify State

function addTask(taskName) {
  const newTask = {
    id: toDoList.tasks.length + 1,
    taskName: taskName,
    isCompleted: false,
    createdAt: new Date(),
  };
  toDoList.tasks.push(newTask);
  renderToDoList;
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
      "class = hover:bg-green-400 text-black subpixel-antialiased py-5 px-8 rounded"
    );
    taskElement.innerText = task.taskName;
    //const dateElement = document.createElement("p");
    //dateElement.innerText = task.createdAt;
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute(
      "class",
      "class = hover:bg-red-700 text-black font-bold py-2 px-4 rounded"
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

renderToDoList(toDoList);

//Script
const addButton = document.getElementById("add-button");
addButton.addEventListener("click", () => {
  const taskName = prompt("Enter task name:");
  const taskDate = prompt("Enter task date:");

  if (taskName) {
    addTask(taskName);
    renderToDoList(toDoList);
  }
});

//write a function that sets a timer for each task of 30 minutes
const timer = (task) => {
  setTimeout(() => {
    alert(`Time is up for ${task.taskName}`);
  }, 1000 * 60 * 30);
};
console.log(timer(toDoList.tasks[0]));
