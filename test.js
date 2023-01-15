const obj = {

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
    };// creting new object
  
    board.push(task);
  };
  addTask('test', '12-jan-2023', false, obj.todo);
  
  const removeTask = (board, index) => {
    board.splice(index, 1);
  };
  
  removeTask(obj.todo, 1);
  
  const move = (sourceBoard, destinationBoard) => {
    destinationBoard.push(sourceBoard);
  };
  move(obj.todo[0], obj.inProgress);
  