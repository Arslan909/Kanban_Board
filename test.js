let obj = {

    // todo-tasks array
    array1: [
        {
            description: "task to-do 1",
            date_created: "11-05-2023",
            isMarked: false

        },
        {
            description: "task to-do 2",
            date_created: "11-05-2023",
            isMarked: false

        }


    ],
    // in-progress tasks array
    array2: [
        {
            description: "task in-progress 1",
            date_created: "11-05-2023",
            isMarked: false

        },
        {
            description: "task in-progress 2",
            date_created: "11-05-2023",
            isMarked: false

        }
    ],
    // completed Tasks array
    array3: [
        {
            description: "task completed 1",
            date_created: "11-05-2023",
            isMarked: false

        },
        {
            description: "task completed 2",
            date_created: "11-05-2023",
            isMarked: false

        }
    ],

    // Funtions of the object contaning 3 array

    taskAdd: function (description1, date_created1, isMarked1) {
        New_obj = { description: description1, date_created: date_created1, isMarked: isMarked1 }// creting new object
        this.array1.push(New_obj);//adding new object to the To-do tasks array

    },
    // taskRemove : function(){},
    // taskMove : function(){}
}

// console.log(obj.taskAdd("test","11-jan-2023",false))

//console.log(obj.array1)