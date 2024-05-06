let input = document.querySelector("#input") ;

const regex = /(\(?\d{2})(\d{4,5})(\d{4})/g;

input.addEventListener("input", function() {
    // Permite somente dígitos
    let cleanedPhone = input.value.replace(/\D/g, '') ; 
    let newPhone = cleanedPhone.replace(regex, '($1) $2-$3') ; //Adicionando máscara

    // Temporário pq vou colocar nos botões -->

    if (cleanedPhone.length > 11) {
        alert("ERROR. O número digitado possui mais de 11 dígitos.");
    } else {
        input.style.color = 'green';
    } ;

    console.log(input.value) //verificando
    
    input.value = newPhone;        
});