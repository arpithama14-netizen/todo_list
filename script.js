function addTask(){

    let taskInput = document.getElementById("taskInput");

    let taskText = taskInput.value;

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");

    span.textContent = taskText;

    span.onclick = function(){
        span.classList.toggle("completed");
    };

    let deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.className = "delete-btn";

    deleteButton.onclick = function(){
        li.remove();
    };

    li.appendChild(span);

    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}
