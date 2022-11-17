// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';
import { Todo, TodoList } from './classes';
import './css/style.css';
import { createTodoHtml } from './js/components';

export const todoList = new TodoList();

todoList.todos.forEach(createTodoHtml); // It's the same: forEach(todo => createTodoHtml(todo));

console.log('To-Dos Elis:', todoList);

// const todo = new Todo('Learn Javascript!!');

// // todoList.newTodo(todo);
// console.log(todoList);

// createTodoHtml(todo);

