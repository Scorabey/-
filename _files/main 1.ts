enum Priority {
    low = "LOW",
    medium = "MEDIUM",
    high = "HIGH"
}

enum Status {
    Todo = "TODO",
    InProgress = "IN_PROGRESS",
    Done = "DONE",
}

interface Task { 
    id: number;
    title: string;
    priority: Priority;
    status: Status
}

const date = new Date

let taskLog: [date: Date | string, event: string] = [date, "Task created"]


class TaskManager {
    private tasks: Task[] = [];
    private nextId: number = 1
    
    addTask(title: string, priority: Priority) {
        const task: Task = {
            id: this.nextId++,
            title,
            priority,
            status: Status.Todo
        }
        this.tasks.push(task)
    }
    changeStatus(newStatus: Status, id: number) {
        const task = this.tasks.find(task => task.id === id)

        if(task) {
            task.status = newStatus
        } else {
            console.log(`Task from id: ${id}, not found!`)
        }
    }
    getByPriority(priority: Priority): Task[] {
        const taskListPriority = this.tasks.filter(task => task.priority === priority)

        return [...taskListPriority]
    }
}

function printTask(task: Task): void {
    console.log(`ID: ${task.id}, PRIORITY: ${task.priority}, STATUS: ${task.status}, TITLE: ${task.title}`)
}

const manager = new TaskManager();

manager.addTask("Fix login bug", Priority.high);
manager.addTask("Update docs", Priority.low);
manager.addTask("Write tests", Priority.medium);

manager.changeStatus(Status.InProgress, 1);
manager.changeStatus(Status.Done, 3);

console.log("=== All high priority ===");
manager.getByPriority(Priority.high).forEach(printTask);

console.log("=== Task log ===");
console.log(taskLog);