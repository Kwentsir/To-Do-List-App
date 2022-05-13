/**
 * @jest-environment jsdom
 */

import ToDoList from "./src/modules/todolist.js";

describe("Edit task input", () => {
  let toDoList;
  beforeEach(() => {
    toDoList = new ToDoList();
    document.body.innerHTML = "<li class='todo-list'></li>";
    localStorage.clear();
  });

  test("should edit the task", () => {
    toDoList.addToDo("task1");
    toDoList.addToDo("task2");
    toDoList.addToDo("task3");
    toDoList.updateDescription(0, "Edit-data");
    document.querySelector(".todo-list").innerHTML = toDoList.renderToDos();
    expect(
      document.querySelectorAll(".todo-list .container")[0].children[1].value
    ).toBe("Edit-data");
  });

  test("should update completed", ()=>{
    toDoList.addToDo("task1");
    toDoList.addToDo("task2");
    toDoList.addToDo("task3");
    toDoList.updateToDoCompleted(0);
    document.querySelector(".todo-list").innerHTML = toDoList.renderToDos();
  expect(
      document.querySelectorAll(".todo-list .container")[0].children[0].classList.contains("fa-check")
    ).toBe(true);
  })

  test("should clear completed task", ()=>{
    toDoList.addToDo("task1");
    toDoList.addToDo("task2");
    toDoList.addToDo("task3");
    toDoList.updateToDoCompleted(0);
    toDoList.updateToDoCompleted(1);
    toDoList.removeAllCompleted();
    document.querySelector(".todo-list").innerHTML = toDoList.renderToDos();
  expect(
      document.querySelectorAll(".todo-list .container").length
    ).toBe(1);
  })
  
});
