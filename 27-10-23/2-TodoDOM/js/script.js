const todoList = [
  "Andare in palestra",
  "Pagare bollette",
  "Appuntamento domani alle 20:30",
  "Comprare le uova",
  "Leggere un libro",
  "Pulire camera",
];

const ul = document.querySelector("ul");

const deleteTodo = (parentElement) => {
  parentElement.remove();
  todoList.splice(+parentElement.id, 1);
};

const createTodo = (inputValue, index) => {
  const li = document.createElement("li");
  li.setAttribute("id", index);

  const textSpan = document.createElement("span");
  textSpan.textContent = inputValue;

  const binSpan = document.createElement("span");
  binSpan.textContent = "\u00D7";
  binSpan.className = "delete";
  binSpan.addEventListener("click", (event) =>
    deleteTodo(event.target.parentElement)
  );

  li.appendChild(textSpan);
  li.appendChild(binSpan);
  ul.appendChild(li);

  return inputValue;
};

todoList.forEach((todo, index) => {
  createTodo(todo, index);
});

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.target[0].value !== "") {
    todoList.push(createTodo(event.target[0].value, todoList.length));
    event.target[0].value = "";
  } else {
    alert("Dai un titolo al todo!")
  }
});
