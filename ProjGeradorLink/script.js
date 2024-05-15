// Variáveis -> 
let input = document.querySelector("#input") ;
let copyBtn = document.querySelector("#copyBtn") ;
let sendBtn = document.querySelector("#sendBtn") ;
let resultLink = document.querySelector("#resultLink") ;

const regex = /(\(?\d{2})(\d{4,5})(\d{4})/g ;  // expressão regular

// Funçõo que vai gerar o link quando chamada nos botoes ->
let linkWhatsapp = () => { 
    let clearNumber = input.value.replace(/\D/g, ''); 
    return `https://wa.me/55${clearNumber}`;
    
}

// Permite a entrada de até 11 digitos, realiza a mascara quando o numero é validado e muda a cor ->
input.addEventListener("input", function() {
    
    input.value = input.value.replace(/\D/g, '') ;  // Permite somente dígitos  
    
    if (input.value.length == 11){
        input.style.color = 'green';
        input.value = input.value.replace(regex, '($1) $2-$3') ; //Adicionando máscara    
        
    }  else if (input.value.length > 11) {
        alert("ERRO. O número só pode possuir até 11 dígitos.");
        input.value = input.value.substring(0,11);  //barra a entrada de mais digitos uma vez que foram atingidos os 11
        
    } else if (input.value.length < 11) {
        input.style.color = 'red';
    }
});

// Volta a tela inicial
input.addEventListener("click", ()=> {resultLink.innerHTML = ""}) ;

//Primeiro botao gera link e o exibe logo abaixo ->
copyBtn.addEventListener("click", function() {
    clearPhone = input.value.replace(/\D/g, '') ;
    if (clearPhone.length !== 11) {
        alert('ERRO. Digite um número válido de 11 dígitos.')
        return '';
    }

    resultLink.innerHTML = `
    <div class = "showedLink">
        <p>${linkWhatsapp()}</p>
    </div>
    <div class = "showedMessage">
        <p id = "messageLink"> Clique no link para copiar </p>
    </div>` ;

    let showedLink = document.querySelector(".showedLink");
    let messageLink = document.querySelector("#messageLink");

    //copia para a area de transferencia e muda mensagem
    showedLink.addEventListener("click", () => {
        navigator.clipboard.writeText(linkWhatsapp()) 
        .then(()=> {
            messageLink.innerText = 'Link copiado para área de transferência'
        })
        .catch(err => {
            window.alert('Erro, tente copiar o link novamente!')
        });
    })
});

// Segundo botao gera link e abre em uma nova aba ->
sendBtn.addEventListener("click", function () {
    clearPhone = input.value.replace(/\D/g, '') ;
    if (clearPhone.length !== 11) {
        alert('ERRO. Digite um número válido de 11 dígitos.')
        return 
    }

    window.open(linkWhatsapp()) 
});
    