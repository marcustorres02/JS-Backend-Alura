//tipagem dinâmica não precisa falar que tipo é a variável =untyped


let minhaVar = 567;
minhaVar = "texto";
minhaVar = true;


//multiparadigma -> resolve 1 problema de várias formas diferentes
//ES6/ES2015-> versão do JavaScript que saiu em 2015
//Linguagem interpretada -> código é executado
//Linguagem compilada -> código vai 1º pra um compilador que vai transformar em linguagem de máquina
//NodeJS -> interpretador do backend

// //Erros:
// const numero;
// console.log(numero
// console.log(oi)

// //SyntaxError => erro de sintaxe
// //initializer => valor passado
// //ReferenceError => erro de referência
// //RangeError: Quando o código recebe um dado do tipo certo, porém não dentro do formato aceitável. Por exemplo, um processamento que só pode ser feito com números inteiros maiores ou iguais a zero, mas recebe -1.
// //TypeError: Indica que o código esperava receber um dado de um determinado tipo, tal qual uma string de texto, mas recebeu outro, como um número, booleano ou null.

//Console -> dados para fora da aplicação -> não aparece diretamente para usuário, mas tem acesso caso precise
//log -> registro

//console.error -> coloca um erro para a pessoa
// console.table() para visualizar de forma mais organizada informações tabulares;
// console.time() e console.timeEnd() para temporizar período que uma operação de código leva para ser iniciada e concluída;
// console.trace() para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.

console.error("Deu erro!")

console.log("deu erro");
console.error(new Error("deu erro"));
