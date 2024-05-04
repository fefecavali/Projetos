let input = document.querySelector("#input") ;

const regex = /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/g;


input.addEventListener("input", function() {
    // Permite somente dÍgitos
    input.value = input.value.replace(/[^0-9]/g, '')

})