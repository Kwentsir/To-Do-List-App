/**
 * @jest-environment jsdom
 */

import ToDoList from './src/modules/todolist.js';

describe('Adding and removing tasks from the list', () => {
  let toDoList;
  beforeEach(() => {
    toDoList = new ToDoList();
    document.body.innerHTML = "<li class='todo-list'></li>";
    localStorage.clear();
  });

  test('should add a new task to the list', () => {
    toDoList.addToDo('test');
    document.querySelector('.todo-list').innerHTML = toDoList.renderToDos();
    const list = document.querySelectorAll('.todo-list .container');
    expect(list).toHaveLength(1);
  });
  test('should remove a task from the list', () => {
    toDoList.addToDo('test');
    toDoList.addToDo('test2');
    toDoList.removeToDo(1);
    document.querySelector('.todo-list').innerHTML = toDoList.renderToDos();
    const list = document.querySelectorAll('.todo-list .container');
    expect(list).toHaveLength(1);
  });
});
