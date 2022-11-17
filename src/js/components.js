import { Todo } from '../classes';
import { todoList } from '../index';

// HTML References
const ulTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');

export const createTodoHtml = todo => {
  const htmlTodo = `
  <li class="${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
		<div class="view">
			<input class="toggle" type="checkbox" ${todo.completed ? 'checked' : ''}>
			<label>${todo.description}</label>
			<button class="destroy"></button>
		</div>
		<input class="edit" value="Create a TodoMVC template">
	</li>
  `;

  const div = document.createElement('div');

  div.innerHTML = htmlTodo;

  ulTodoList.append(div.firstElementChild);

  return div.firstElementChild;
};

// Events
txtInput.addEventListener('keyup', e => {
  // console.log(e.keyCode);
  if (e.keyCode === 13 && txtInput.value.trim().length > 0) {
    // console.log('enter');
    // console.log(txtInput.value);
    const newTodo = new Todo(txtInput.value);
    todoList.newTodo(newTodo);

    // console.log(todoList);

    createTodoHtml(newTodo);

    txtInput.value = '';
  }
});

ulTodoList.addEventListener('click', e => {
  // console.log('click:', e.target.localName);
  const elementName = e.target.localName;
  const todoElement = e.target.parentElement.parentElement;
  const todoID = todoElement.getAttribute('data-id');

  // console.log(todoElement);
  // console.log('ID:', todoID);

  if (elementName.includes('input')) {
    // Click en el checkbox
    todoList.toggleCompleted(todoID);
  }

  todoElement.classList.toggle('completed');

  console.log(todoList);
});
