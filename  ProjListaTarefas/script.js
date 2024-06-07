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
        counterDone.textContent = counterD + ' de ' + counterT

    });
    
    trashIcon.addEventListener("mouseenter", () => {
        trashIcon.src = "./Icones/trashIconHover.svg";
        trashIcon.style.transform = 'scale(1.3)'
    });

    trashIcon.addEventListener("mouseleave", () => {
        trashIcon.src = "./Icones/trashIcon.svg";
        trashIcon.style.transform = 'scale(1.1)'
    });

    trashIcon.addEventListener("click" , ()=> {
        divTask.remove();
        counterT -=1
        counterTask.textContent = counterT
        counter(taskIcon)
        noTasks()
    });

    counterT +=1
    counterTask.textContent = counterT
    
}

function counter (taskIcon) {
    if (taskIcon.src.includes("iconAfter.svg")) {
        counterD -=1
        counterDone.textContent = counterD + ' de ' + counterT
    } else {
        counterD == counterD + 'de' + counterT
    }
    
}

function noTasks() {
    if (counterT === 0) {
        // Adicione a formatação inicial
        messageParagraph.innerHTML = `
            <p><img src="./Icones/taskIcon.svg" alt="taskIcon"></p>
            <p> <strong>Você ainda não tem tarefas cadastradas</strong></p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        `;
        messageParagraph.style.borderTop = '1px solid var(--color8)' ;
    }
}
