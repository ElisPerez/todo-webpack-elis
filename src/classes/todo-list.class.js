import { Todo } from './todo.class';

export class TodoList {
  constructor() {
    // this.todos = [];
    this.loadFromLocalStorage();
  }

  // methods
  newTodo(todo) {
    this.todos.push(todo);
    this.saveToLocalStorage();
  }

  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id != id);
    this.saveToLocalStorage();
  }

  toggleCompleted(id) {
    for (const todo of this.todos) {
      // console.log('todo.id and id:', todo.id, id); // el todo.id es un number, y el id es un string, por eso se usa el == y no el === para hacer la comparación.
      if (todo.id == id) {
        todo.completed = !todo.completed;
        // console.log({ completed: todo.completed });
        this.saveToLocalStorage();
        break;
      }
    }
  }

  deleteCompleted() {
    this.todos = this.todos.filter(todo => !todo.completed);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    // localStorage.setItem('todo', this.todos) // [Object Object]: Es la representación de un objeto al pasarlo a string
    localStorage.setItem('To-Dos', JSON.stringify(this.todos));
  }

  loadFromLocalStorage() {
    // if (localStorage.getItem('To-Dos')) {
    //   this.todos = JSON.parse(localStorage.getItem('To-Dos'));
    //   console.log('Todos:', this.todos);
    // } else {
    //   this.todos = [];
    // }

    this.todos = localStorage.getItem('To-Dos') ? JSON.parse(localStorage.getItem('To-Dos')) : [];

    // this.todos = this.todos.map(obj => Todo.fromJson(obj));
    this.todos = this.todos.map(Todo.fromJson);
    // console.log('ToDos:', this.todos);
  }
}
