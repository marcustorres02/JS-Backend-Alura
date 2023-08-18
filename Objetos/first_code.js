const listaCPFs = [111111, 222222, 333333];

const informacoesPessoa = ["nome", "Jose", "idade", 32, "CPF", "1111222223333"];

const objetoPessoa = {
    nome : "Jose",
    idade : 32,
    CPF : "1111122222223333333",
};

const cliente = {
    nome : "Andre",
    idade : 32,
    CPF : "1111222222223333",
    email : "andre@dominio.com",
};

console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente["idade"]} anos`);

console.log(`Os 3 primeiros digitos do CPF sãp ${cliente.CPF.substring(0, 3)}`);

const chaves = ["nome", "idade", "CPF", "email", "altura"];

chaves.forEach((chave => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
}));

const pessoa = {
    nome : "Luma",
    profissao: "Engenheira",
}

pessoa.telefone = "11 222233334444";

console.log(pessoa.telefone);

pessoa.nome = "Luma Silva";

console.log(pessoa.nome);

//Erro:
// const novaPessoa = {
//     nome: "Pedro",
//   };
  
//   pessoa = novaPessoa;

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

//Se quisermos, por exemplo, remover a propriedade aliado, podemos utilizar o operador delete:

delete objPersonagem.aliado
delete objPersonagem["status"]

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined

const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]

console.log(delProp) //true
console.log(delPropInexistente) //true