// A função require para "puxar" o conteúdo de um outro arquivo

const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados);

// A função stringify transforma um objeto em uma String

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof clienteEmString);

console.log(clienteEmString.nome);

// A função parse transforma novamente em Objeto

const objetoCliente = JSON.parse(clienteEmString);

console.log(objetoCliente);
console.log(typeof objetoCliente);