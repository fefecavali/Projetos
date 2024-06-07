let btn = document.querySelector("button");
let taskVar = document.querySelector("article");
let input = document.querySelector("#addNewTask");
let counterDone = document.querySelector("#doneCounter");
let counterTask = document.querySelector("#taskCounter");
let messageParagraph = document.querySelector("#inicialMessage");

let counterT = 0;
let counterD = 0;

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
    let taskIcon = document.createElement("img"); 
    let trashIcon = document.createElement("img");
    let list = document.createElement("ul");
    let itemList = document.createElement("li");
    itemList.textContent = input.value;
    
    // Imagem da tarefa e da lixeira
    taskIcon.src = "./Icones/iconBefore.svg"; 
    taskIcon.alt = "icon";
    trashIcon.src = "./Icones/trashIcon.svg";
    trashIcon.alt = "trashIcon";
    
    list.appendChild(itemList);
    content.appendChild(taskIcon); 
    content.appendChild(list); 
    counterT +=1;
    content.appendChild(trashIcon);
    divTask.appendChild(content); 
    trashIcon.classList.add("trash-icon")
    divTask.classList.add("task");
    content.classList.add("content")
    
    taskVar.appendChild(divTask);
    input.value = '';   
    
    taskIcon.addEventListener("click" , ()=> {
        if (taskIcon.src.includes("iconBefore.svg")) {
            taskIcon.src = "./Icones/iconAfter.svg";
            itemList.style.textDecoration = "line-through";
            counterD +=1

        } else {
            taskIcon.src = "./Icones/iconBefore.svg";
            itemList.style.textDecoration = "none";
            counterD -=1
        }
        counterDone.textContent = counterD

    });
    
    trashIcon.addEventListener("click" , ()=> {
        counterT -=1
        counterTask.textContent = counterT
        divTask.remove();
    });

    counterTask.textContent= counterT
}
