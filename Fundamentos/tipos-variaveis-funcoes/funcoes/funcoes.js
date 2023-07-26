/*
let texto = "";
console.log(texto);
texto = "oi";
console.log(texto);
*/

// Declaração da função

function exibirTexto(texto) {
    console.log(texto);
}

// Execução ou chamada da função

exibirTexto("Bom dia, boa tarde ou boa noite");
exibirTexto("Volte sempre!");

// Exemplo de função sem parâmetro

function soma() {
    return 2 + 2;
}

// console.log(soma());

exibirTexto(soma());

/*
Algumas funções matemáticas que já vêm prontas no JavaScript:

Math.round(): Faz o arredondamento (round em inglês) de um número de ponto flutuante para o inteiro mais próximo.
Ex: Math.round(4.3) retorna 4

Math.ceil(): Faz o arredondamento para o valor mais alto, também conhecido como teto (ceil em inglês).
Ex: Math.ceil(5.2) retorna 6

Math.floor(): Faz o arredondamento para o valor mais baixo, também conhecido como piso (floor em inglês).
Ex: Math.floor(5.2) retorna 5

Math.trunc() : Desconsidera os números decimais, o que é conhecido como truncamento.
Ex: Math.trunc(4.3) retorna 4

Math.pow() : Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2) ou cubo(3). Recomenda-se usar a multiplicação por ser mais rápido.
Ex: Math.pow(4 , 2) retorna 4^2 = 16

Math.sqrt() : Retorna a raiz quadrada de um número.
Ex: Math.sqrt(64) retorna 8

Math.min(): Retorna o menor valor entre os argumentos.
Ex: Math.min(0, 150, 30, 20, -8, -200) retorna -200

Math.max(): Retorna o maior valor entre os argumentos.
Ex: Math.max(0, 150, 30, 20, -8, -200) retorna 150

Math.random(): Retorna um valor randômico (random em inglês) entre 0 e 1, então não teremos um valor esperado para receber.
Ex: Math.random() retorna 0.7456916270759015
*/