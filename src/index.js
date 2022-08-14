import { Project, loadProject } from "./modules/project";
import { addProject, addTask, removeTask, updateStorage } from "./modules/funcs";
import "./modules/popup";
import "./styles/style.css";


let projects = [];
let currentProject = null;
export {
    projects, 
    currentProject
}

window.addEventListener("load", () => {
    const projectsJson = JSON.parse(localStorage.getItem("projects"));
    projects = projectsJson;
    for (let i = 0; i < projects.length; i++) {
        const project = projects[i]
        project.addTask = Project.prototype.addTask;
        project.removeTask = Project.prototype.removeTask;
        addProject(project);
        const projectDiv = document.querySelector(".projects div:last-child");
        projectDiv.addEventListener("click", () => {
            currentProject = project;
            loadProject(projects[projects.indexOf(currentProject)]);
        });

        // when dbl click the project will be removed
        projectDiv.addEventListener("dblclick", (e) => {
            if (projects.length <= 1) {
                alert("You Can't Remove All Projects");
                return;
            }
            projects.splice(projects.indexOf(project), 1);
            const projectsDiv = document.querySelector("body > main > div.projects-bar > div.projects");
            projectsDiv.removeChild(projectDiv);
            loadProject(projects[0]);
            updateStorage()
        });
    }
    currentProject = projects[0];
    loadProject(projects[projects.indexOf(currentProject)]);
});

const addProjectBtn = document.querySelector("#add-project-popup > div > input[type=button]:nth-child(2)");
addProjectBtn.addEventListener("click", () => {
    const projectName = document.querySelector("#add-project-popup > div > input[type=text]:nth-child(1)");
    if (projectName.value == "") {
        alert("You Must Provide A Project Name");
        return;
    }
    const project = new Project(projectName.value)
    addProject(project);
    const projectDiv = document.querySelector(".projects div:last-child");
    projects.push(project);
    projectDiv.addEventListener("click", () => {
        currentProject = project;
        loadProject(projects[projects.indexOf(currentProject)]);
    });

    // when dbl click the project will be removed
    projectDiv.addEventListener("dblclick", (e) => {
        if (projects.length <= 1) {
            alert("You Can't Remove All Projects");
            return;
        }
        projects.splice(projects.indexOf(project), 1);
        const projectsDiv = document.querySelector("body > main > div.projects-bar > div.projects");
        projectsDiv.removeChild(projectDiv);
        loadProject(projects[0]);
        updateStorage()
    });
    updateStorage()

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
    updateStorage()
    removeTask(task)
    const taskPopup = document.querySelector("#add-task-popup");
    taskPopup.toggleAttribute("hidden");
    title.value = "";
    description.value = "";
    date.value = "";
});