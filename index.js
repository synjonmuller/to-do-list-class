let todos = [];

function addTodo() {
    let input = document.getElementById("todoInput");
    let task = input.value;
    
    if (task !== "") { 
        todos.push(task); 
        input.value = ""; 
        renderTodos();
    }
}

function renderTodos() {
    let todoList = document.getElementById("todoList");
    todoList.innerHTML = ""; 

    for (let i = 0; i < todos.length; i++) { 
        let listItem = document.createElement("li");
        listItem.textContent = todos[i];

        listItem.onclick = function () { 
            if (listItem.style.textDecoration === "line-through") {
                listItem.style.textDecoration = "none";
            } else {
                listItem.style.textDecoration = "line-through";
            }
        };

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.onclick = function () {
            todos.splice(i, 1);
            renderTodos();
        };

        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
    }
}
