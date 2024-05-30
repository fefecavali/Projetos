let btn = document.querySelector("button")
let taskVar = document.querySelector("article")
let input = document.querySelector("#addNewTask")
let counterDone = document.querySelector("#doneCounter")
let counterTask = document.querySelector("#taskCounter")
let messageParagraph = document.querySelector("#inicialMessage");

let counter = 0

btn.addEventListener("click", ()=> {
    if (input.value.trim() === '') {
        alert("Digite uma tarefa!");
        return;
    } else {
        messageParagraph.innerHTML = '';
    }

    createTask()
})

function createTask() {
    let divTask = document.createElement("div");
    let list = document.createElement("ul"); // Criando a lista de tarefas
    let itemList = document.createElement("li");
    itemList.textContent = input.value;

    list.appendChild(itemList);
    divTask.appendChild(list);

    // Adicionando classe 
    divTask.classList.add("task");
    taskVar.appendChild(divTask);
    input.value = '';            
    
}