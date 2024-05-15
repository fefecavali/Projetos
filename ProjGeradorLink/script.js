// Variáveis -> 
let input = document.querySelector("#input") ;
let copyBtn = document.querySelector("#copyBtn") ;
let sendBtn = document.querySelector("#sendBtn") ;
let resultLink = document.querySelector(".resultLink") ;

const regex = /(\(?\d{2})(\d{4,5})(\d{4})/g ;  // expressão regular

// Funçõo que vai gerar o link ->
let linkWhatsapp = () => { 
    let clearNumber = input.value.replace(/\D/g, ''); 
    return `https://wa.me/55${clearNumber}`;
    
}

function messageLink(evento) {
    evento.target.innerHTML = "Clique no link para copiar" 
}

// Permite a entrada de até 11 digitos, realiza a mascara quando o numero é validado e muda a cor ->
input.addEventListener("input", function() {
    
    input.value = input.value.replace(/\D/g, '') ;  // Permite somente dígitos       

    if (input.value.length == 11){
        input.style.color = 'green';
        input.value = input.value.replace(regex, '($1) $2-$3') ; //Adicionando máscara    
        
    } else if (input.value.length > 11) {
        alert("ERROR. O número só pode possuir até 11 dígitos.");
        input.value = input.value.substring(0,11);  //barra a entrada de mais digitos uma vez que foram atingidos os 11
        
    } else if (input.value.length < 11) {
        input.style.color = 'red';
    }
    
});

// Volta a tela inicial
input.addEventListener("click", ()=> {resultLink = ""})

//Primeiro botao gera link e o exibe logo abaixo ->
copyBtn.addEventListener("click", function () {
    // copyBtn.addEventListener("click", function() {
        //     navigator.clipboard.writeText(linkWhatsapp()) ;
        //     console.log(linkWhatsapp()) ;
        // });
    
})

// Segundo botao gera link e abre em uma nova aba ->
sendBtn.addEventListener("click", () => {window.open(linkWhatsapp())})