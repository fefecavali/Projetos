let input = document.querySelector("#input") ;
let copyBtn = document.querySelector("#copyBtn") ;
let sendBtn = document.querySelector("#sendBtn") ;
let resultLink = document.querySelector(".resultLink") ;

const regex = /(\(?\d{2})(\d{4,5})(\d{4})/g ;  

// Funçõo que vai gerar o link ->
let linkWhatsapp = () => { 
    let clearNumber = input.value.replace(/\D/g, ''); 
    return `https://wa.me/55${clearNumber}`;
    
}

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


input.addEventListener("click", ()=> {resultLink.innerHTML = ""}) ; // Volta a tela inicial

//Primeiro botao ->
copyBtn.addEventListener("click", function() {
    clearPhone = input.value.replace(/\D/g, '') ;
    if (clearPhone.length !== 11) {
        alert('ERRO. Digite um número válido de 11 dígitos.')
        return '';
    }

    //cria no HTML
    resultLink.innerHTML = `
    <div class = "showedLink">
        <p>${linkWhatsapp()}</p>
    </div>
    <div class = "showedMessage">
        <p id = "messageLink"> Clique no link para copiar </p>
    </div>` ;

    let showedLink = document.querySelector(".showedLink");
    let messageLink = document.querySelector("#messageLink");

    
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

// Segundo botão ->
sendBtn.addEventListener("click", function () {
    clearPhone = input.value.replace(/\D/g, '') ;
    if (clearPhone.length !== 11) {
        alert('ERRO. Digite um número válido de 11 dígitos.')
        return 
    }

    window.open(linkWhatsapp()) 
});
    