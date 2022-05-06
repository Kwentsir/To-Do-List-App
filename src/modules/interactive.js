export const updateCompleted = (list, id) => {
  list.updateToDoCompleted(id);
};

export const removeCompletedFromList = (list) => {
  list.removeAllCompleted();
};
