"use strict";
//Create a task
const mytask = {
    id: 1,
    name: "learn TypeScript",
    completed: false
};
//Function to mark a task done
function completeTask(task) {
    return { ...task, completed: true };
}
//Function to display task details
const finishedTask = completeTask(mytask);
console.log(finishedTask);
