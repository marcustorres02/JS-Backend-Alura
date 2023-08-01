//Operadores de comparação
//== -> comparação e conversão implicita, só compara valor
const numero=5;
const texto = "5";

console.log(numero == texto)

//=== -> específico, compara os  e valores

console.log(numero === texto)

//typeof -> ve o tipo de cada variável

console.log(typeof numero)
console.log(typeof texto)

//Boas práticas é fazer conversão explicita

console.log(typeof Number("5"))
console.log(typeof String(5))

// ||: Operador “ou”, retorna true caso uma condição seja válida;
// &&: Operador “e”, retorna true somente se todas as condições forem válidas;
// != e !==: Operadores “não igual” e “estritamente não igual”, utilizados para comparação, da mesma forma que == e === retornam true ou false.

const idadeMinima = 18;
const idadeCliente = 18;

if(idadeCliente >= idadeMinima){
    console.log("cerveja");
}
else{
    console.log("suco");
}

//Operador ternário é como se fosse um if com estrutura reduzida
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco");
//Boa prática não recomenda usar (condição ? "true" : "false")

//concactenar strings
const nome = "Gessyca";
const apresentacao ="Meu nome é " + nome;
console.log(apresentacao);


const idade = 2023-1999;
const cidadeDeNascimento = "Uberlândia";

console.log(apresentacao + ", minha idade é " + idade + " e nasci na cidade de "+ cidadeDeNascimento);

//Template strings
const novaApresentacao = `Meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`;
console.log(novaApresentacao)
