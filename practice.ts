interface Task {
    id: number;
    name: string;
    completed: boolean;
}
//Create a task
const mytask: Task ={
    id:1,
    name:"learn TypeScript",
    completed:false
}
//Function to mark a task done
function completeTask(task: Task): Task {
    return {...task, completed: true};
}
//Function to display task details
const finishedTask = completeTask(mytask);
console.log(finishedTask);