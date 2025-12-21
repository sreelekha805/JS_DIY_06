// Changing the content of the heading tag.
document.getElementById("heading").innerHTML = "CREATE YOUR TO-DO LIST!!";

// Accessing the input element.
const userInput = document.getElementById("to_do");

// Accessing the ul element by its id.
  const todoList = document.getElementById("todo_list");

// To create the to-do list this function is created.
function addTask()
{ 
  // Accessing the content of the input field.
  const inputAccess = userInput.value;

  // When user will not give any input, there will be an alert.
  if (inputAccess === "")
  {
    alert("Please enter the valid INPUT");
    return;
  }

  // Creating the element li dynamically to store the inputs as a list.
  const todoItem = document.createElement("li");

  // Adding the css class to style it. 
  todoItem.classList.add("text");

  //Adding the input given by the user in the li elements.
  todoItem.textContent = inputAccess;

  // todoItem is the child element of todoList.
  todoList.appendChild(todoItem);

  // Creating a button to delete any list item from the list.
  const deleteItem = document.createElement("button");

  // Adding the css class to style it.
  deleteItem.classList.add("space", "button");

  // Adding the text to the button element.
  deleteItem.textContent = "DELETE";
  todoItem.appendChild(deleteItem);

  deleteItem.onclick = function() {delTask(todoItem)};
}

function delTask(task)
{
  // removing the li element, by clicking the delete button.
  task.remove();
}

// Refresh the input field when the page is refreshed.
window.onload = function ()
{
  userInput.value = '';
}
