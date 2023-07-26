// Declaração de função

/*
function funcao(param) {
    // codigo
}

funcao("texto");
*/

// Expressão de função

const soma = function(num1, num2) { return num1 + num2 };

console.log(soma(1,2));

// Diferença entre os dois tipos: HOISTING -> listar as funções e var primeiro

console.log(mostrar());

function mostrar() {
    return "Bom dia";
}

console.log(mult(1,2));
const mult = function(num1, num2) { return num1 * num2 };