/* eslint-disable no-unused-vars */
const Board = {

  // todo-tasks array
  todo: [],
  // in-progress tasks array
  inProgress: [],
  // completed Tasks array
  done: [],
};

const addTask = (description1, date, mark, board) => {
  const task = {
    description: description1,
    date_created: date,
    isMarked: mark,
  };// creting new Boardect

  board.push(task);
};

const removeTask = (board, index) => {
  board.splice(index, 1);
};

removeTask(Board.todo, 1);

const move = (sourceBoard, destinationBoard) => {
  destinationBoard.push(sourceBoard);
};

const modification = (description1, date, mark, index) => {
  Board.todo[index].description = description1;
  Board.todo[index].date_created = date;/* eslint-disable no-unused-vars */
  Board.todo[index].isMarked = mark;
};
