import ToDoList from './modules/todolist.js';
import './style.css';
import {
  addToList,
  removeFromList, updateDescription,
} from './modules/add-remove.js';
import { removeCompletedFromList, updateCompleted } from './modules/interactive.js';

const todoList = new ToDoList();
todoList.loadToDos();

const todoListElement = document.querySelector('.todo-list');
todoListElement.innerHTML = todoList.renderToDos();

const form = document.getElementById('form');
form.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addToList(todoList);
    todoListElement.innerHTML = todoList.renderToDos();
  }
});

const listenForEventsOnInputs = () => {
  const inputs = document.querySelectorAll('.todo');
  if (inputs) {
    inputs.forEach((input) => {
      input.addEventListener('focus', (event) => {
        event.target.parentElement.classList.toggle('dark');
      });
    });

    inputs.forEach((input) => {
      input.addEventListener('blur', (event) => {
        event.target.parentElement.classList.toggle('dark');
      });
    });

    inputs.forEach((input) => {
      input.addEventListener('change', (event) => {
        updateDescription(todoList, event.target.dataset.id, event.target.value);
        todoListElement.innerHTML = todoList.renderToDos();
        listenForEventsOnInputs();
      });
    });
  }
};

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('fa-trash-can')) {
    removeFromList(todoList, event.target.dataset.id);
    todoListElement.innerHTML = todoList.renderToDos();
    listenForEventsOnInputs();
  }

  if (event.target.classList.contains('check')) {
    updateCompleted(todoList, event.target.dataset.id);
    todoListElement.innerHTML = todoList.renderToDos();
    listenForEventsOnInputs();
  }

  if (event.target.classList.contains('btn')) {
    removeCompletedFromList(todoList);
    todoListElement.innerHTML = todoList.renderToDos();
    listenForEventsOnInputs();
  }
});

listenForEventsOnInputs();
