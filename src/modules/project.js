import { loadTasks } from "./task";

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

const loadProject = (project) => {
    const projectName = document.querySelector("#project-name");
    projectName.textContent = project.name;

    loadTasks(project);
}

export {
    Project,
}