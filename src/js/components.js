import { Todo } from '../classes';
import { todoList } from '../index';

// HTML References
const ulTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnDeleteAllCompleted = document.querySelector('.clear-completed');
const ulFilters = document.querySelector('.filters');
const anchorFilters = document.querySelectorAll('.filtro');

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
    todoElement.classList.toggle('completed');
  } else if (elementName.includes('button')) {
    // Delete todo.
    todoList.deleteTodo(todoID);

    ulTodoList.removeChild(todoElement);
  }

  // console.log(todoList);
});

btnDeleteAllCompleted.addEventListener('click', () => {
  todoList.deleteCompleted(); // Borra del array

  // Borrar en el HTML
  for (let i = ulTodoList.children.length - 1; i >= 0; i--) {
    const element = ulTodoList.children[i];

    // console.log(element);
    if (element.classList.contains('completed')) {
      ulTodoList.removeChild(element);
    }
  }
});

ulFilters.addEventListener('click', e => {
  // console.log(e.target.text);
  const filter = e.target.text;
  if (!filter) return;

  anchorFilters.forEach(element => element.classList.remove('selected'));
  // console.log(e.target); // anchor tag like this: <a class="filtro" href="#/">All</a>
  e.target.classList.add('selected'); // Se agrega la class selected al anchor tag que ha sido clicked.

  for (const element of ulTodoList.children) {
    // console.log(element);
    element.classList.remove('hidden');

    const completed = element.classList.contains('completed');

    switch (filter) {
      case 'Active':
        if (completed) {
          element.classList.add('hidden');
        }
        break;

      case 'Completed':
        if (!completed) {
          element.classList.add('hidden');
        }
        break;
    }
  }
});
