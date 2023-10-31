import { Todo } from "./Todo.js";

const todoList = [
  new Todo("Andare in palestra", new Date("October 25, 2023 8:05:00 GMT+1:00")),
  new Todo("Pagare bollette", new Date("October 25, 2023 8:10:00 GMT+1:00")),
  new Todo("Appuntamento domani alle 20:30", new Date("October 25, 2023 8:15:00 GMT+1:00")),
  new Todo("Comprare le uova", new Date("October 25, 2023 8:20:00 GMT+1:00")),
  new Todo("Leggere un libro", new Date("October 25, 2023 8:25:00 GMT+1:00")),
  new Todo("Pulire camera", new Date("October 25, 2023 8:30:00 GMT+1:00")),
];

const readTodo = (array, index) => {
  console.log(array[index]);
}

const updateTodo = (updatedTodoTitle, array, index) =>  {
  const updatedTodo = new Todo(updatedTodoTitle, new Date());
  array[index] = updatedTodo;
}

const deleteTodo = (array, index) => {
  array.splice(index, 1);
}

const newTodo = new Todo("Preparare la valigia", new Date("October 25, 2023 9:00:00 GMT+1:00"));
todoList.push(newTodo);
readTodo(todoList, todoList.length - 1);

updateTodo("Preparare la valigia il prima possibile", todoList, todoList.length - 1);
readTodo(todoList, todoList.length - 1);

deleteTodo(todoList, todoList.length - 1);
console.log(todoList);