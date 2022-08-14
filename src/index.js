import { Task, loadTasks } from "./modules/task";
import { Project, loadProject } from "./modules/project";
import { addProject, addTask, removeTask } from "./modules/funcs";
import "./modules/popup";
import "./styles/style.css";

let projects = [];
let currentProject = null;
export {
    projects, 
    currentProject
}
const addProjectBtn = document.querySelector("#add-project-popup > div > input[type=button]:nth-child(2)");
addProjectBtn.addEventListener("click", () => {
    const projectName = document.querySelector("#add-project-popup > div > input[type=text]:nth-child(1)");
    if (projectName.value == "") {
        alert("You Must Provide A Project Name");
        return;
    }
    const project = addProject(projectName.value);
    const projectDiv = document.querySelector(".projects div:last-child");
    projects.push(project);
    projectDiv.addEventListener("click", () => {
        currentProject = project;
        loadProject(projects[projects.indexOf(currentProject)]);
    });
    projectName.value = "";
    const projectPopup = document.querySelector("#add-project-popup");
    projectPopup.toggleAttribute("hidden");
});

const addTaskBtn = document.querySelector("#add-task-popup > div > input[type=button]:nth-child(4)");
addTaskBtn.addEventListener("click", () => {
    const title = document.querySelector("#add-task-popup > div > input[type=text]:nth-child(1)");
    const description = document.querySelector("#add-task-popup > div > input[type=text]:nth-child(2)");
    const date = document.querySelector("#add-task-popup > div > input[type=date]:nth-child(3)");
    if (title.value == "" || description.value == "" || date.value == "") {
        alert("You Must Fill all inputs");
        return;
    }
    const task = addTask(title.value, description.value, date.value);
    projects[projects.indexOf(currentProject)].addTask(task);

    removeTask(task)
    const taskPopup = document.querySelector("#add-task-popup");
    taskPopup.toggleAttribute("hidden");
    title.value = "";
    description.value = "";
    date.value = "";
});