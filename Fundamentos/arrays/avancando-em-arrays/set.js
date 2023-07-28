const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// A classe Set é parecida com array, onde não há duplicatas

const meuSet = new Set(nomes);

const nomesAtualizados = [...meuSet];

console.log(nomesAtualizados);