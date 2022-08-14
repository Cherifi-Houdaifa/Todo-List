const addProjectPopupBtn = document.querySelector(".btn > #add-project");
addProjectPopupBtn.addEventListener("click", () => {
    const projectPopup = document.querySelector("#add-project-popup");
    projectPopup.toggleAttribute("hidden");
});

const addTaskPopupBtn = document.querySelector("#add-task");
addTaskPopupBtn.addEventListener("click", () => {
    const taskPopup = document.querySelector("#add-task-popup");
    taskPopup.toggleAttribute("hidden");
});