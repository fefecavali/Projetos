let input = document.querySelector("#input") ;
let sendBtn = document.querySelector("#sendBtn") ;
let copyBtn = document.querySelector("#copyBtn") ;

const regex = /(\(?\d{2})(\d{4,5})(\d{4})/g ;


function handleBtnContar() {
    console.log('oi')
}

input.addEventListener("input", function(event) {
    // Permite somente dígitos
    let cleanedPhone = input.value.replace(/\D/g, '') ; 
    let newPhone = cleanedPhone.replace(regex, '($1) $2-$3') ; //Adicionando máscara

    // Temporário pq vou colocar nos botões -->

    if (cleanedPhone.length > 11) {
        input.style.color = 'black';
        input.value = newPhone.slice(0, 14); 
        alert("ERROR. O número só pode possuir até 11 dígitos.");
        
        
    } else if (cleanedPhone.length < 11) {
        input.style.color = 'black';
        input.value = newPhone; 
    } else if (cleanedPhone.length === 11) {
        input.style.color = 'green';
        sendBtn.addEventListener("click", handleBtnContar() )
    };
    
});