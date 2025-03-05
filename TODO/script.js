var ul = document.getElementById("container");
var input = document.getElementById("input");
document.getElementById("btn").addEventListener("click", addData);

function addData() {
    var list = document.createElement("li");
    
    list.innerHTML = `
        <span class="task-text">${input.value}</span>
        <button onclick="editItem(event)">Edit</button>
        <button onclick="strike(event)">Completed</button>
        <button class="remove-btn">Remove</button>
    `;
    
    ul.append(list);
}

ul.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-btn")) {
        event.target.parentElement.remove();
    }
});

function editItem(event) {
    var taskText = event.target.parentElement.querySelector(".task-text");
    var newText = prompt("Edit your task:", taskText.innerText);
    if (newText !== null && newText.trim() !== "") {
        taskText.innerText = newText;
    }
}

document.getElementById("rbtn").addEventListener ("click",markAsRead(event)); 
function strike(event) {
    var taskText = event.target.parentElement.querySelector(".task-text");
    taskText.style.textDecoration = "line-through";
    taskText.style.color = "red";
}
