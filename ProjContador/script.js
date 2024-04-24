const inputTexto = document.querySelector("[input-texto]")
const btnContar = document.querySelector("[btn-contar]")
const divContador = document.querySelector("[txt-contador]")

let contagemCaracteres = true

function contagem () {
    const text = inputTexto.value
    if (contagemCaracteres) { 
        const countWords = text.trim().split(" ") ;
        divContador.innerText = countWords.length + " palavras";
    }else{  
        let quantCaractere = text.length
        divContador.innerText = quantCaractere + " caracteres"; }
}



function handleBtnContar(evento) {

    if (contagemCaracteres){
        evento.target.innerText = "Contar Palavras"     
        contagemCaracteres = false;
        contagem();
    } else {
        evento.target.innerText = "Contar Caracteres"
        contagemCaracteres = true ;
        contagem();
    }
}
// variavel q recebeu função não declarativa


btnContar.addEventListener("click", handleBtnContar)
inputTexto.addEventListener("input", contagem);
// btnContar.onclick = handleBtnContar   -> outra forma


   