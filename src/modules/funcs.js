import { Project } from "./project";
import { Task } from "./task";
import image from "../x.svg";
import { projects, currentProject } from "../index";

const addProject = (name) => {
    const project = new Project(name);
    const projectsDiv = document.querySelector(".projects");
    const projectDiv = document.createElement("div");
    
    projectDiv.classList.add("project");
    projectDiv.textContent = name

    projectsDiv.insertBefore(projectDiv, document.querySelector("btn"));
    
    return project;
}
const addTask = (title, description, date) => {
    const task = new Task(title, description, date);
    const TasksDiv = document.querySelector("body > main > div.content > div");
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const titlePara = document.createElement("p");
    titlePara.setAttribute("id", "title");
    titlePara.textContent = task.title;

    const descriptionPara = document.createElement("p");
    descriptionPara.setAttribute("id", "description");
    descriptionPara.textContent = task.description;

    const datePara = document.createElement("p");
    datePara.setAttribute("id", "date");
    datePara.textContent = task.dueDate;

    const img = document.createElement("img");
    img.classList.add("remove-task");
    img.setAttribute("src", image);

    taskDiv.appendChild(titlePara);
    taskDiv.appendChild(descriptionPara);
    taskDiv.appendChild(datePara);
    taskDiv.appendChild(img);

    TasksDiv.insertBefore(taskDiv, document.querySelector("#add-task"));
    return task;
}
const removeTask = (task) => {
    const taskDiv = document.querySelector("body > main > div.content > div > div:nth-last-child(2)");
    const removeTaskBtn = taskDiv.querySelector("img");
    removeTaskBtn.addEventListener("click", () => {
        const tasksDiv = document.querySelector("body > main > div.content > div");
        tasksDiv.removeChild(taskDiv);
        projects[projects.indexOf(currentProject)].removeTask(task);
        console.log(projects[projects.indexOf(currentProject)])
    });
}
export {
    addProject,
    addTask,
    removeTask,
}