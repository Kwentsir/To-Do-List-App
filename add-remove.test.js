import ToDoList from './src/modules/todolist.js';


describe("adding element to the list", () => {
  let ToDoList;
  test("add element to the list", () => {
    document.body.innerHTML = "<div>" + '  <ul id="list"></li>' + "</div>";
    ToDoList(ToDo);
  });
});
