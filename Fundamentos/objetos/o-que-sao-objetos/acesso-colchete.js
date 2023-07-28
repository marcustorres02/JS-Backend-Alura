// Acessando campos de um objeto

const cliente = {
    nome: "Andre",
    idade: 32,
    CPF: "111",
    email: "andre@dominio.com"
};

console.log(`O nome do cliente é ${cliente["nome"]}, possui ${cliente["idade"]} anos, seu CPF é '${cliente["CPF"]}' e o seu email é '${cliente["email"]}'`);

const chaves = ["nome", "idade", "CPF", "email"];

chaves.forEach( (chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
})