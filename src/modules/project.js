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
        this.tasks.splice(this.tasks.indexOf(task), 1);
    }
}

const loadProject = (project) => {
    const projectName = document.querySelector("#project-name");
    projectName.textContent = project.name;

    const tasksDiv = document.querySelector("body > main > div.content > div");
    const tasks = document.querySelectorAll("body > main > div.content > div > div.task:not(:nth-child(1))");
    tasks.forEach((task) => {
        tasksDiv.removeChild(task)
    });
    

    loadTasks(project);
}

export {
    Project,
    loadProject
}