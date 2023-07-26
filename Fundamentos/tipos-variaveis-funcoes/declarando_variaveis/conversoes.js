// tipo de dado
// booleanos

// Conversão implícita: Permite que converta um tipo de dado em outro. Ex: Converter um número para uma String

const numero = 456;
const numeroString = "456";

console.log(numero == numeroString); // Ocorre a conversão
console.log(numero === numeroString); // Compara o tipo

// = : atribuição
// == : compara o valor
// === : compara o valor e o tipo

console.log(numero + numeroString); // faz uma concatenação, porque converte o número em uma String

// Conversão explícita: Utiliza duas funçoes: 1. Number(): Para converter para número; 2. String(): Para converter para String

console.log(numero + Number(numeroString));