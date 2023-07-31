// Sintaxe de espalhamento - spread operator

const cliente = {
    nome: "Joao",
    idade: 20,
    email: "joao@dominio.com",
    telefone: ["34 11112222", "34 11113333"],
};

cliente.enderecos = [
    {
    rua: "Quinze",
    numero: 1,
    apartamento: true,
    complemento: "ap 212",
    },
];

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
};

console.log(encomenda);