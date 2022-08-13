class Project {
    constructor (name) {
        this.name = name;
        this.tasks = [];
    }
    addTask (task) {
        this.tasks.push(task);
    }
    removeTask (task) {
        this.tasks.splice(task, 1);
    }
}

export default Project;