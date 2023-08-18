const dados = require("./fourth_code.json");
//require -> função que puxa o código de algum lugar


console.log(dados);
console.log(typeof dados);

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof clienteEmString);

console.log(clienteEmString.nome);


const objoCliente = JSON.parse(clienteEmString);

console.log(objoCliente);