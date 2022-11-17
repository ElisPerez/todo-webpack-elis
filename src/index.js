// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';
import { Todo, TodoList } from './classes';
import './css/style.css';
import { createTodoHtml } from './js/components';


const todoList = new TodoList();

const todo = new Todo('Learn Javascript!!');



todoList.newTodo(todo);
console.log(todoList);


createTodoHtml(todo)