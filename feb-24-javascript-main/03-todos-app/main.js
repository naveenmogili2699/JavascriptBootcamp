import { Todos } from "./controller/Todos.js";
import { ListTemplate } from "./views/ListTemplate.js";

window.onload = function () {
  const btnAdd = document.querySelector("#btnAdd");
  const txtLabel = document.querySelector("#txtLabel");
  const listContainer = document.querySelector("#listContainer");
  const todo = new Todos();
  const template = new ListTemplate(listContainer);

  todo.fetchTodos().then((todos) => template.renderTemplate(todos));

  btnAdd.addEventListener("click", async function (event) {
    event.preventDefault();
    let newTodo = {
      label: txtLabel.value,
    };

    const createdTodo = await todo.createTodo(newTodo);

    template.renderItem(createdTodo);

    txtLabel.value = "";
  });
};
