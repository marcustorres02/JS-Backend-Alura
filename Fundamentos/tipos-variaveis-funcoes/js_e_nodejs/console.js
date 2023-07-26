// Console é uma ferramenta que é utilizada para colocar dados e informações para "fora"

// log -> registro

const minhaVar = true;

console.log(245);
console.log("eu sou um texto");
console.log(minhaVar);

// Tratamento de erros

console.error('Erro!');

// Outros métodos:

/*
console.error() para exibir mensagens de erro;
console.table() para visualizar de forma mais organizada informações tabulares;
console.time() e console.timeEnd() para temporizar período que uma operação de código leva para ser iniciada e concluída;
console.trace() para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.
*/

console.log("deu erro");
console.error("deu erro");

console.log("deu erro");
//console.error(new Error("deu erro"));