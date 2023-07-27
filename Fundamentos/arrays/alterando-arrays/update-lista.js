const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// O método splice serve para remover elementos de um Array ou adicionar, passando o índice do 1° elemento a ser removido e
// a quantidade de elementos que serão removidos

nomes.splice(1, 2, "Ricardo");
// nomes.push("Ricardo");

console.log(nomes);