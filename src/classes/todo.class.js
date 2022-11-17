export class Todo {
  static fromJson({ completed, createdAt, description, id }) {
    const tempTodo = new Todo(description);

    tempTodo.completed = completed;
    tempTodo.createdAt = createdAt;
    tempTodo.id = id;

    return tempTodo;
  }

  constructor(description) {
    this.completed = false;
    this.createdAt = new Date();
    this.description = description;
    this.id = new Date().getTime(); // 1668632663264
  }
}
