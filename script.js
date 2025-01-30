// Select the input field, button, and task list
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Function to create a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new list item
    const li = document.createElement("li");

    // Add task text
    li.textContent = taskText;

    // Create a delete button
    const deleteButton = document.createElement("span");
    deleteButton.textContent = "✖";
    deleteButton.className = "delete";

    // Add click event to delete button
    deleteButton.addEventListener("click", () => {
        li.remove();
    });

    // Append the delete button to the task item
    li.appendChild(deleteButton);

    // Append the task item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
}

// Event listener for the "Add Task" button
addTaskButton.addEventListener("click", addTask);

// Event listener for pressing "Enter" in the input field
taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
