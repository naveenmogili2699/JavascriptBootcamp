export class ListTemplate {
  constructor(listContainer) {
    this.listContainer = listContainer;
  }

  renderTemplate = (todos) => {
    todos.forEach((todo) => {
      const liElement = document.createElement("li");

      liElement.innerHTML = todo.label.toUpperCase();

      this.listContainer.appendChild(liElement);
    });
  };

  renderItem(item) {
    const liElement = document.createElement("li");

    liElement.innerHTML = item.label.toUpperCase();

    this.listContainer.appendChild(liElement);
  }
}
