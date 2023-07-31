// Iterando dentro de um objeto

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

for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function"){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}