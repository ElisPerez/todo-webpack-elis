export class TodoList {
  constructor() {
    this.todos = [];
  }

  // methods
  newTodo(todo) {
    this.todos.push(todo);
  }

  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id != id);
  }

  toggleCompleted(id) {
    for (const todo of this.todos) {
      // console.log('todo.id and id:', todo.id, id); // el todo.id es un number, y el id es un string, por eso se usa el == y no el === para hacer la comparación.
      if (todo.id == id) {
        todo.completed = !todo.completed;
        // console.log({ completed: todo.completed });
        break;
      }
    }
  }

  deleteCompleted() {
    this.todos = this.todos.filter(todo => !todo.completed);
  }
}
