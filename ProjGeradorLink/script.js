const input = document.querySelector("#input") ;
const sendBtn = document.querySelector("#sendBtn") ;
const copyBtn = document.querySelector("#copyBtn") ;

const regex = /(\(?\d{2})(\d{4,5})(\d{4})/g ;  //expressao regular

// Funçõo que vai gerar o link 
let linkWhatsapp = () => { 
    let clearNumber = input.value.replace(/\D/g, ''); // Remover todos os caracteres que não são dígitos
    return `https://wa.me/55${clearNumber}`;
    
}


function copytoClipboard() {
    // navigator.clipboard.whiteText(linkWhatsapp)
    console.log(linkWhatsapp())
}

input.addEventListener("input", function(event) {
    // Permite somente dígitos
    let cleanedPhone = input.value.replace(/\D/g, '') ; 
    let newPhone = cleanedPhone.replace(regex, '($1) $2-$3') ; //Adicionando máscara
    
    if (cleanedPhone.length > 11) {
        input.style.color = 'black';
        input.value = newPhone.slice(0, 14); 
        alert("ERROR. O número só pode possuir até 11 dígitos.");
        
    
    } else if (cleanedPhone.length < 11) {
        input.style.color = 'black';
        input.value = newPhone; 
    } else if (cleanedPhone.length === 11) {
        input.style.color = 'green';
        // sendBtn.addEventListener("click", copytoClipboard())
        copyBtn.addEventListener("click", copytoClipboard())
    };
    
});