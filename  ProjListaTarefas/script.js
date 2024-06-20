let btn = document.querySelector("button");
let taskVar = document.querySelector("article");
let input = document.querySelector("#addNewTask");
let counterDone = document.querySelector("#doneCounter");
let counterTask = document.querySelector("#taskCounter");
let messageParagraph = document.querySelector("#inicialMessage");

let counterT = 0;
let counterD = 0;

// Inicializar as tarefas a partir do localStorage
let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];
console.log(allTasks)

btn.addEventListener("click", () => {
    if (input.value.trim() === '') {
        alert("Digite uma tarefa!");
        return;
    } else {
        messageParagraph.innerHTML = '';
        messageParagraph.style.border = 'none';
    }

    let newTask = {
        id: Date.now(), 
        text: input.value,
        completed: false
    };

    allTasks.push(newTask);
    updateLocalStorage();
    addTaskToDOM(newTask);
    input.value = '';
    counterT += 1;
    updateCounter();
    noTasks();
});

function addTaskToDOM(task) {
    let divTask = document.createElement("div");
    let content = document.createElement("div");
    let taskIcon = document.createElement("img");
    let trashIcon = document.createElement("img");
    let list = document.createElement("ul");
    let itemList = document.createElement("li");
    itemList.textContent = task.text;

    // Imagem da tarefa e da lixeira
    taskIcon.src = task.completed ? "./Icones/iconAfter.svg" : "./Icones/iconBefore.svg";
    taskIcon.alt = "icon";
    trashIcon.src = "./Icones/trashIcon.svg";
    trashIcon.alt = "trashIcon";

    if (task.completed) {
        itemList.style.textDecoration = "line-through";
        counterD += 1;
    }

    list.appendChild(itemList);
    content.appendChild(taskIcon);
    content.appendChild(list);
    content.appendChild(trashIcon);
    divTask.appendChild(content);
    trashIcon.classList.add("trash-icon");
    divTask.classList.add("task");
    content.classList.add("content");

    taskVar.appendChild(divTask);

    taskIcon.addEventListener("click", () => {
        task.completed = !task.completed;
        taskIcon.src = task.completed ? "./Icones/iconAfter.svg" : "./Icones/iconBefore.svg";
        itemList.style.textDecoration = task.completed ? "line-through" : "none";
        counterD += task.completed ? 1 : -1;
        updateLocalStorage();
        updateCounter();
    });

    trashIcon.addEventListener("mouseenter", () => {
        trashIcon.src = "./Icones/trashIconHover.svg";
        trashIcon.style.transform = 'scale(1.3)';
    });

    trashIcon.addEventListener("mouseleave", () => {
        trashIcon.src = "./Icones/trashIcon.svg";
        trashIcon.style.transform = 'scale(1.1)';
    });

    trashIcon.addEventListener("click", () => {
        allTasks = allTasks.filter(t => t.id !== task.id);
        updateLocalStorage();
        divTask.remove();
        counterT -= 1;
        if (task.completed) {
            counterD -= 1;
        }
        updateCounter();
        noTasks();
    });
}

function updateCounter() {
    counterTask.textContent = counterT;
    counterDone.textContent = counterD + ' de ' + counterT;
}

function noTasks() {
    if (counterT === 0) {
        // Adicione a formatação inicial
        messageParagraph.innerHTML = `
            <p><img src="./Icones/taskIcon.svg" alt="taskIcon"></p>
            <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        `;
        messageParagraph.style.borderTop = '1px solid var(--color8)';
    } else {
        messageParagraph.innerHTML = '';
        messageParagraph.style.border = 'none';
    }
}

function updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(allTasks));
}
