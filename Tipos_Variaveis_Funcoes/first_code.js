//tipo number

const meuNumero = 3;
const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero * segundoNumero;
const operacao = 1/2;

console.log(operacaoMatematica)
console.log(operacao)
console.log(1+2)

//ponto flutuante
const pontoFlutuante = 3.3;
const semZero = .5;

const operacaoMatematica2 = pontoFlutuante * semZero;
const operacao2 = 3.3/.5;

console.log(operacaoMatematica2)
console.log(operacao2)
console.log(3+.5)

//NaN => Not a number

const alura="alura";
const alura1='alura curso';

console.log(alura*primeiroNumero)
console.log(alura)
console.log(alura1)

const citacao= "'Pra n embananar'";

console.log(citacao)

//concatenar (+)

console.log(citacao+alura)

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

const cidade = "belo horizonte";
const cidadeMinuscula = "Belo Horizonte";

console.log(cidade === cidadeMinuscula); // false

const inputMinusculo = cidadeMinuscula.toLowerCase(); //converte tudo pra minusculo

console.log(cidade === inputMinusculo); // true

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres

let input = null;
let input2;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}
console.log(input); // null
console.log(input2); // undefined

