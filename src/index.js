import Task from "./modules/todo";
import Project from "./modules/project";
import "./styles/style.css";
import img from "./x.svg"

// set icon for remove task
const removeTask = document.querySelector("#remove-task");
removeTask.setAttribute("src", img)