const nome = "Marcus";
const idade = 2023 - 2002;
const cidadeNatal = "Uberlândia";
// const dadosPessoais = "Meu nome é " + nome + ", minha idade é " + idade + " e nasci em " + cidadeNatal;

// Utilizando Template String:

const dadosPessoais = `Meu nome é ${nome}, minha idade é ${idade} e nasci em ${cidadeNatal}`;

console.log(dadosPessoais);

// Outro exemplo:

const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`;
console.log(pedido);