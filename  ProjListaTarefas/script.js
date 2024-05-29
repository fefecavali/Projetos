let btn = document.querySelector("button")
let taskVar = document.querySelector("article")
let input = document.querySelector("input")
let counterDone = document.querySelector("#doneCounter")
let counterTask = document.querySelector("#taskCounter")


btn.addEventListener("click", ()=> {
    if (input.value.trim() === '') {
        alert("Digite uma tarefa!");
        return;
    }

     
})
