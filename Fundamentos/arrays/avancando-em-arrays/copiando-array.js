const notas = [7, 7, 8, 9];

// ... ou operador de espalhamento (spread operator), pega todo conteúdo do array e passa para um novo array.
// É a forma de como fazer a cópia de um array

const novasNotas = [...notas, 10];

// novasNotas.push(10);

console.log(novasNotas);
console.log(notas);