// Forma reduce mais direta

const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acc, atual) => atual + acc, 0)

console.log(soma) //170

// Forma reduce de uma forma mais extensa, separando bem o código

const soma2 = numeros.reduce(function (acc, atual) {
    return atual + acc;
   }, 0)

console.log(soma2)

// Forma reduce escrevendo a função callback fora do reduce

function operacaoNumerica(acc, atual) {
    return atual + acc
   }
   
const soma3 = numeros.reduce(operacaoNumerica, 0)

console.log(soma3);