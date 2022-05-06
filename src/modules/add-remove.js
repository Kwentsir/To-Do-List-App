export const addToList = (list) => {
  const input = document.querySelector('#todo');
  const { value } = input;
  if (value) {
    list.addToDo(value);
    input.value = '';
  }
};

export const updateDescription = (list, id, description) => {
  list.updateDescription(+id, description);
};

export const removeFromList = (list, id) => {
  list.removeToDo(+id);
};
