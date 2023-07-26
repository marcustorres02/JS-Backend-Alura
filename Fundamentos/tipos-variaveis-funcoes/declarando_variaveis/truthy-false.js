// boolean

const usuarioLogado = true;
const contaPaga = false;

// truthy ou falsy

// 0 -> false / falso
// 1 -> true / verdadeiro

console.log(0 == false);
console.log("" == false);
console.log(1 == true);

// null: Representa o vazio, não significa nada.
// undefined: Variável declarada mas não tem valor.
// São similares, mas não iguais

let minhaVar;
let varNull = null;

console.log(typeof minhaVar);
console.log(typeof varNull);

// Quando o null foi criado no JavaScript, foi criado como object. Foi um erro, mas não há pretensão de correção.

let numero = 10;
let text = "alura";
console.log(typeof numero)
console.log(typeof text)

// typeof é um comando que consegue indentificar qual é o tipo de uma variável.