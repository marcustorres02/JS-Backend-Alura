//O javaScript le uma linha depois da outra, ou seja, o valor atribuido a x ="oi" não será exibido na tela
let x = "";
console.log(x);
x="oi";

//Funções -> pode chamar um determinado pedaço de código a qualquer momento
//declarando função e dizendo o que ela faz:
function imprimeTexto(texto){
    console.log(texto);
}

//executando a função 1 ou mais vezes
imprimeTexto("oi");
imprimeTexto("outro texto");

//3 formas de escrever as funções:
function soma(){
    constresultado = 3 + 2;
    return(constresultado);
}
console.log(soma())

function outraSoma(){
    //return tem que ser o ultimo a ser escrito
    return 2 + 2;
}
console.log(outraSoma())

//chamar uma função dentro de uma função
outraFuncao(soma());

function outraFuncao(texto){
    console.log(texto);
}

//Math.round(): Faz o arredondamento (round em inglês) de um número de ponto flutuante para o inteiro mais próximo.
//Math.ceil(): Faz o arredondamento para o valor mais alto, também conhecido como teto (ceil em inglês).
//Math.floor(): Faz o arredondamento para o valor mais baixo, também conhecido como piso (floor em inglês).
//Math.trunc() : Desconsidera os números decimais, o que é conhecido como truncamento.
//Math.pow() : Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2) ou cubo(3). Recomenda-se usar a multiplicação por ser mais rápido.
//Math.sqrt() : Retorna a raiz quadrada de um número.
//Math.min(): Retorna o menor valor entre os argumentos.
//Math.max(): Retorna o maior valor entre os argumentos.
//Math.random(): Retorna um valor randômico (random em inglês) entre 0 e 1, então não teremos um valor esperado para receber.

//parâmetros de função
function multiplicacao(num1 = 1, num2 = 1){
    return num1 * num2;
}
console.log(multiplicacao(soma(), 3 / 2));
console.log(multiplicacao(soma()));

//parâmetros e argumentos
//ordem dos parâmetros importa num1 = 2 e num2 = 3

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}
console.log(nomeIdade("Gessyca", 23));

//Função sem retorno e parâmetro:
function cumprimentar(){
    console.log('oi gente!')
}
   
cumprimentar()

//Função sem retorno e sem parâmetro:
function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
}
   
cumprimentaPessoa('Helena')


//Função com retorno e sem parâmetro:
function cumprimentar(){
    return 'Oi gente!'
}
   
function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}
   
cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”


//Expressões de funções -> não tem nome geralmente e tem que ser chamada depois de declarada
const somas = function(num1, num2, num3) {return num1 + num2 + num3}
console.log(somas(1, 2, 3))

//Arrow Function
const apresentarArrow = nome => `meu nome é ${nome}`;
const somaNumerosPequenos = (num1, num2) => {
    if(num1 > 10 ||  num2 > 10){
        return "somente números de 1 a 9";
    }
    else{
        return num1 + num2;
    }
};

const num = 11;

if (num > 10 && num < 20) {
 console.log('número válido');
}
