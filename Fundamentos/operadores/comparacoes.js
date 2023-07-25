// == -> Comparação implícita: Faz a conversão dos tipos. Compara apenas os valores.

const numero = 10;
const texto = "10";

console.log(numero == texto);

// === -> Comparação explícita: Não faz a conversão automática. Compara os valores e os tipos. Mais utilizado pois é uma boa prática.

console.log(numero === texto);

// typeof -> Mostra os tipos das variáveis

console.log(typeof numero);
console.log(typeof texto);