const inputTexto = document.querySelector("[input-texto]")
const btnContar = document.querySelector("[btn-contar]")
const divContador = document.querySelector("[txt-contador]")

let contagemCaracteres = true

const saudacao = (evento) => {

    console.log(evento.target.value)
    
    
}

function handleBtnContar(evento) {
    if (contagemCaracteres){
        evento.target.innerText = "Contar Palavras"     
        contagemCaracteres = false;
    } else {
        evento.target.innerText = "Contar Caracteres"
        contagemCaracteres = true ;
    }
}
// variavel q recebeu função não declarativa


// function saudacao(evento) {
    //     console.log("ola")
    //     console.log(evento.target)
    // } funcao declarativa
    
    
btnContar.addEventListener("click", handleBtnContar)
// btnContar.onclick = handleBtnContar   -> outra forma


inputTexto.addEventListener("input", saudacao)
   