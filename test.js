const obj = {

  // todo-tasks array
  todo_board: [],
  // in-progress tasks array
  inProgress_board: [],
  // completed Tasks array
  Done_board: [],
};

function addTask(description1, date, isMarked1, board) {
  const task = {
    description: description1,
    date_created: date,
    isMarked: isMarked1,
  };// creting new object

  board.push(task);
}
addTask('test', '12-jan-2023', false, obj.todo_board);
function removeTask(board, index) {
  board.splice(index, 1);
}

removeTask(obj.todo_board, 1);
