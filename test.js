/* eslint-disable no-unused-vars */
const Board = {

  // todo-tasks array
  todo: [],
  // in-progress tasks array
  inProgress: [],
  // completed Tasks array
  done: [],
};
// function to add task
const addTask = (description1, date, mark, board) => {
  const task = {
    description: description1,
    date_created: date,
    isMarked: mark,
  };
  board.push(task);
};

// function to remove task
const removeTask = (board, index) => {
  board.splice(index, 1);
};

// function to move task
const moveTask = (sourceBoard, destinationBoard, index) => {
  destinationBoard.push(sourceBoard[index]);
  removeTask(sourceBoard, index);
};

// function to modify task
const modifyTask = (description1, date, mark, index) => {
  Board.todo[index].description = description1;
  Board.todo[index].date_created = date;
  Board.todo[index].isMarked = mark;
};
