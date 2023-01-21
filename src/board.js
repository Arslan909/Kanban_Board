const todoBoard = document.querySelector('#todo-board');

/* eslint-disable no-unused-vars */
const Board = {
  todo: [],
  inProgress: [],
  done: [],
};

const addTask = (board, task, category = 'todo') => {
  board[category].push(task);
};

const removeTask = (board, index) => {
  board.splice(index, 1);
};

// TODO: fix this function
const moveTask = (sourceBoard, destinationBoard, index) => {
  destinationBoard.push(sourceBoard[index]);
  removeTask(sourceBoard, index);
};

// function to modify task
const modifyTask = (description1, date, mark, index) => {
  Board.todo[index].description = description1;
  Board.todo[index].isMarked = mark;
};

const task = {
  description: 'task 1',
  isMarked: false,
};

const taskElement = document.createElement('div');
taskElement.classList.add('task');
taskElement.innerHTML = `
    <p>${task.description}</p>
    `;

todoBoard.appendChild(taskElement);
