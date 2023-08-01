// Encontrar as pessoas que moram em apartamento e não forneceram complemento

const clientes = require("./clientes.json");

// A função hasOwnProperty() é usado para verificar se um determinado onjeto possui uma certa propriedade

function filtrarApSemComp(clientes){
    return clientes.filter((cliente) => {
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"));
    });
}

const filtrados = filtrarApSemComp(clientes);

console.log(filtrados);