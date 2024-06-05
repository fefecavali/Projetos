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
        messageParagraph.style.border = 'none';
    }

    createTask()
})

function createTask() {
    let divTask = document.createElement("div");
    let content = document.createElement("div");
    let taskImage = document.createElement("img"); 
    let list = document.createElement("ul");
    let itemList = document.createElement("li");
    itemList.textContent = input.value;

    // Configurando a imagem da tarefa
    taskImage.src = "./btn1.png"; 
    taskImage.alt = "icon";

    list.appendChild(itemList);
    content.appendChild(taskImage); 
    content.appendChild(list); 
    divTask.appendChild(content); 

    // Adicionando classe 
    divTask.classList.add("task");
    content.classList.add("content")

    taskVar.appendChild(divTask);
    input.value = '';            
}
