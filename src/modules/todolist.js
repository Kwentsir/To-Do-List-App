import ToDo from './todo.js';

export default class ToDoList {
  constructor() {
    this.toDos = [];
  }

  addToDo(description) {
    const index = this.toDos.length;
    const toDo = new ToDo(index, description, false);
    this.toDos.push(toDo);
    this.#saveToDos();
    this.renderToDos();
  }

  #addToDos(toDos) {
    toDos.forEach((toDo) => {
      this.addToDo(toDo.index, toDo.description, toDo.completed);
    });
  }

  getToDos() {
    return this.toDos;
  }

  removeToDo(id) {
    this.toDos = this.toDos.filter((toDo) => toDo.index !== id);
    this.#rearrangeToDos();
    this.#saveToDos();
    this.renderToDos();
  }

  updateToDoCompleted(id) {
    this.toDos.forEach((toDo) => {
      if (toDo.index === id) {
        toDo.completed = !toDo.completed;
      }
    });
    this.#saveToDos();
    this.renderToDos();
  }

  #rearrangeToDos() {
    this.toDos.forEach((toDo, index) => {
      toDo.index = index;
    });
    this.#saveToDos();
    this.renderToDos();
  }

  removeAllCompleted() {
    this.toDos = this.toDos.filter((toDo) => toDo.completed === true);
    this.#rearrangeToDos();
    this.#saveToDos();
    this.renderToDos();
  }

  loadToDos() {
    const toDos = JSON.parse(localStorage.getItem('toDos'));
    if (toDos) {
      this.#addToDos(toDos);
    }
  }

  #saveToDos() {
    localStorage.setItem('toDos', JSON.stringify(this.toDos));
  }

  renderToDos() {
    return this.toDos
      .map(
        (toDo) => `
            <li>
                <p class="todo">${toDo.description}</p>
            </li>
            <hr>
    `,
      )
      .join('');
  }
}
