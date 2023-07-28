// Criando lista de Objetos

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

cliente.enderecos.push({
    rua: "Dois",
    numero: 2,
    apartamento: false,
});

const listaApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApartamentos);