// Encontrar um determinado objeto dentro de uma lista de objetos

const clientes = require("./clientes.json");

// O método find() encontra um item de acordo com o que foi passado como valor

function encontrar(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor));
}

const encontrado = encontrar(clientes, "nome", "Kirby");

const encontrado2 = encontrar(clientes, "telefone", "1918820860");

console.log(encontrado2);