const form = document.querySelector("form");
const todoInput = document.querySelector("form input");
const todoList = document.querySelector("ul");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodoText = todoInput.value;
  const newLi = document.createElement("li");
  newLi.innerHTML = `<span>${newTodoText}</span>
  <div class="buttons">
    <button class="todo-btn done">Done</button>
    <button class="todo-btn remove">Remove</button>
  </div>`;
  todoList.append(newLi);
  todoInput.value = "";
});

todoList.addEventListener("click", (e) => {
  if (e.target.textContent === "Done") {
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";
  }
  if (e.target.textContent === "Remove") {
    const targetedLi = e.target.parentNode.parentNode;
    targetedLi.remove();
  }
});
