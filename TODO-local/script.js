var ul = document.getElementById("container");
var input = document.getElementById("input");
let tasks = [];
document.getElementById("btn").addEventListener("click", addData);
window.onload = () => {
    tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(todo => addtodo(todo));
}

function addData() {
    let task = input.value.trim();
    if (task === "") return;
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    addtodo(task);
    input.value = "";
}

function addtodo(todo) {
    let list = document.createElement("li");
    list.innerHTML = `
        <span class="task-text"> ${todo}</span>
        <button class='edit'>Edit</button>
        <button  class='strike'>Mark as Read</button>
        <button class='btn'>Delete</button>
    `;
    ul.append(list);
    list.querySelector('.btn').addEventListener('click', deleteItem);

    function deleteItem() {
        ul.removeChild(list);
        removelocal(todo);
    }

    list.querySelector(".edit").addEventListener("click", () => editItem(list, todo));
    function editItem(list, todo) {
        var taskText = list.querySelector(".task-text");
        let cleanText = todo.replace(/^&check; /, "");
        var newText = prompt("Edit your task:", cleanText);
        if (newText !== null && newText.trim() !== "") {
            let index = tasks.indexOf(todo);
            if (index > -1) {
                tasks[index] = newText;
                localStorage.setItem("tasks", JSON.stringify(tasks));
            }
            taskText.innerText = newText;
        }
    }

    list.querySelector(".strike").addEventListener("click", () => markAsRead(list, todo));
    function markAsRead(list, todo) {
        var taskText = list.querySelector(".task-text");
        if (!taskText.innerHTML.startsWith("&check;")) {
            taskText.innerHTML = "&check;" + taskText.innerHTML;
            taskText.style.color = "green";
            let index = tasks.indexOf(todo);
            if (index > -1) {
                tasks[index] = "&check;" + todo;
                localStorage.setItem("tasks", JSON.stringify(tasks));
            }
        }
    }
}

function removelocal(todo) {
    let index = tasks.indexOf(todo);
    if (index > -1)
        tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
