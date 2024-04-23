/****
 * Seleção dos elementos HTML
 ****/
// Botões
const btnBotoes = document.querySelectorAll("[btn-numero]");
const btnOperacoes = document.querySelectorAll("[btn-operador]");
const btnIgual = document.querySelector("[btn-igual]");
const btnDelete = document.querySelector("[btn-delete]");
const btnAC = document.querySelector("[btn-ac]");

// As divs que vão exibir os valores da calculadora
const bufferElemento = document.querySelector("[txt-buffer]");
const displayElemento = document.querySelector("[txt-display]");

// Objeto que irá representar e armazenar os dados da calculadora
const calculadora = {
  operandoAnterior: "",
  operandoAtual: "",
  operador: "",
  bufferTextoElemento: bufferElemento, // DIV buffer
  displayTextoElemento: displayElemento, // DIV display
};


document.addEventListener("keyup", (evento) => {
    let teclaPressionada = evento.key ;
    // console.log(evento.key)

    let numeros = "0123456789."
    let operadores = "+=*/="

    if (numeros.includes(teclaPressionada)) {
        adicionaNumero(calculadora, teclaPressionada)
    } else { (operadores.includes(teclaPressionada)) 
        escolheOperador(calculadora,teclaPressionada)
    }}
)
/****
 * Associar funções aos eventos dos elementos HTML
 //***


// Botão AC
btnAC.addEventListener("click", () => {
  limpaVariaveis(calculadora);
});

// Botão Delete
btnDelete.addEventListener("click", () => {
  apagaDigito(calculadora);
});

// Botão de igual
btnIgual.addEventListener("click", () => {
  executaCalculo(calculadora);
});

// Botões dos números
btnBotoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const numero = botao.textContent;
    adicionaNumero(calculadora, numero);
  });
});

// Botões dos operadores
btnOperacoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const operador = botao.textContent;
    escolheOperador(calculadora, operador);
  });
});

****
 * Regras da aplicação
****/

function atualizaDisplay(calculadora) {
  calculadora.bufferTextoElemento.textContent = calculadora.operandoAnterior + calculadora.operador;
  calculadora.displayTextoElemento.textContent = calculadora.operandoAtual;
}

function limpaVariaveis(calculadora) {
  calculadora.operandoAnterior = "";
  calculadora.operandoAtual = "";
  calculadora.operador = "";
  atualizaDisplay(calculadora);
}

function adicionaNumero(calculadora, numero) {
  if (numero === "." && calculadora.operandoAtual.includes(".")) return;
  calculadora.operandoAtual += numero;
  atualizaDisplay(calculadora);
}

function escolheOperador(calculadora, operador) {
  if (calculadora.operandoAtual === "") return;
  if (calculadora.operandoAnterior !== "") {
    executaCalculo(calculadora);
  }
  calculadora.operador = operador;
  calculadora.operandoAnterior = calculadora.operandoAtual;
  calculadora.operandoAtual = "";
  atualizaDisplay(calculadora);
}

function executaCalculo(calculadora) {
  let resultado;
  const anterior = parseFloat(calculadora.operandoAnterior);
  const atual = parseFloat(calculadora.operandoAtual);

//   if (isNaN(anterior) || isNaN(atual)) return;
//   if (calculadora.operador === "+") {
//     resultado = anterior + atual;
//   } else if (calculadora.operador === "-") {
//     resultado = anterior - atual;
//   } else if (calculadora.operador === "*") {
//     resultado = anterior * atual;
//   } else if (calculadora.operador === "÷") {
//     resultado = anterior / atual;
//   } else {
//     return;
//   }

  calculadora.operandoAtual = resultado.toString();
  calculadora.operandoAnterior = "";
  calculadora.operador = "";
  atualizaDisplay(calculadora);
}

function apagaDigito(calculadora) {
  calculadora.operandoAtual = calculadora.operandoAtual.toString().slice(0, -1);
  atualizaDisplay(calculadora);
}