const inputTexto = document.querySelector("[input-texto]")
const btnContar = document.querySelector("[btn-contar]")
const divContador = document.querySelector("[txt-contador]")

let contagemCaracteres = true

function contagem () {
    let quantPalavras = 0
    if (contagemCaracteres) {
    let isPalavra = false;
    for (let i = 0; i < inputTexto.value.length; i++) {
        if (inputTexto.value[i] !== " " && inputTexto.value[i] !== "\n" && inputTexto.value[i] !== "\t") // verificando se nn tem é espaco em branco, quebra linha ou tab
         {          
            if (!isPalavra) {
                isPalavra = true;
                quantPalavras++;
            }
        } else {
            isPalavra = false;
    divContador.innerText = quantPalavras; 
                } 
            }
        } else{
        let quantCaractere = inputTexto.value.length
        divContador.innerText = quantCaractere; }
       
}

// "&&" verdadeiro ao mesmo tempo


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


btnContar.addEventListener("click", handleBtnContar)
inputTexto.addEventListener("input", contagem);
// btnContar.onclick = handleBtnContar   -> outra forma


   