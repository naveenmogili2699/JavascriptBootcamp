export class Todos {
  createTodo = async (todo) => {
    const response = await fetch("http://localhost:3000/todos", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Unable to create item");
    }

    return await response.json();
  };

  fetchTodos = async () => {
    const response = await fetch("http://localhost:3000/todos");
    return await response.json();
  };

  deleteTodo = async (todoId) => {
    // Write the code to delete item based on ID
  };
}
