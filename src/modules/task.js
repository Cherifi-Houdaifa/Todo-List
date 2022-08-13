/*
 <div class="task">
                    <p id="title">Comb</p>
                    <p id="description">Do some bull shit</p>
                    <p id="date">2200/22/20</p>
                    <img src="" alt="" id="remove-task">
                </div>
*/


import image from "../x.svg";

class Task {
    constructor (title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }
    
}

const loadTasks = (project) => {
    const tasks = document.querySelector(".tasks");

    for (let i = 0; i < project.tasks.length; i++) {
        let task = project.tasks[i];
        
        
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        const title = document.createElement("p");
        title.setAttribute("id", "title");
        title.textContent = task.title;
        const description = document.createElement("p");
        description.setAttribute("id", "description");
        description.textContent = task.description;
        const date = document.createElement("p");
        date.setAttribute("id", "date");
        date.textContent = task.dueDate;
        
        let img = document.createElement("img");
        img.setAttribute("src", image);
        img.setAttribute("id", "remove-task");

        taskDiv.appendChild(title);
        taskDiv.appendChild(description);
        taskDiv.appendChild(date);
        taskDiv.appendChild(img);


        tasks.appendChild(taskDiv);
    }
}

export {
    Task,
    loadTasks
}