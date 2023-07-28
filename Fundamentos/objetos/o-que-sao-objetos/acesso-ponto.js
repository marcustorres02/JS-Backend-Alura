// Acessando campos de um objeto

const cliente = {
    nome: "Andre",
    idade: 32,
    CPF: "111",
    email: "andre@dominio.com"
};

console.log(`O nome do cliente é ${cliente.nome}, possui ${cliente.idade} anos, seu CPF é '${cliente.CPF}' e o seu email é '${cliente.email}'`);

console.log(`Os 2 primeiros digitos do CPF são ${cliente.CPF.substring(0,2)}`);