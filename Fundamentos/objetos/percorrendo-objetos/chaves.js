const cliente = {
    nome: "Joao",
    idade: 20,
    email: "joao@dominio.com",
    telefone: ["34 11112222", "34 11113333"],
};

// cliente.enderecos = [
//     {
//     rua: "Quinze",
//     numero: 1,
//     apartamento: true,
//     complemento: "ap 212",
//     },
// ];

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")){
    console.error("Erro!!! Necessário ter um endereço cadastrado!");
}