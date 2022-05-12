import ToDoList from './src/modules/todolist.js';


describe("adding element to the list", () => {
  let toDoList;
  beforeEach (() => {
 toDoList = new ToDoList ();
  }),
    document.body.innerHTML = "<div class='todo-list'></div>";
    localStorage.clear();
});

test('should add a new task to the list', () =>{
  toDoList.addToDo('test');
  document.querySelector('.todo-list').innerHTML = toDoList.renderToDos();
const list = document.querySelectorAll('.todo-list .container');
expect(list).toHaveLength(1);
});


