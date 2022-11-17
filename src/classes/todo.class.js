export class Todo {
  constructor(description) {
    this.completed = false;
    this.createdAt = new Date();
    this.description = description;
    this.id = new Date().getTime(); // 1668632663264
  }
}
