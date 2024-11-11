//State
const toDoList = {
  name: "list",
  createdAt: new Date(),
  tasks: [
    {
      id: 1,
      taskName: "task1",
      isCompleted: false,
    },
    {
      id: 2,
      taskName: "task2",
      isCompleted: false,
    },
    {
      id: 3,
      taskName: "task3",
      isCompleted: false,
    },
    {
      id: 4,
      taskName: "task4",
      isCompleted: false,
    },
    {
      id: 5,
      taskName: "task5",
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
    taskElement.innerText = task.taskName;
    const deleteButton = document.createElement("button");
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
