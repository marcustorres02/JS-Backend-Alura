function mostrar(nome) {
    return `Nome: ${nome}`;
}
console.log(mostrar("Joao"));

// Arrow Function: Deixa o código menor, não pode ser nomeada, sempre vem com uma const. Vantagens quando está trabalhando com objetos.

const mostrarArrow = nome => `Nome: ${nome}`;
console.log(mostrarArrow("Joao"));

const soma = (num1, num2) => num1 + num2;
console.log(soma(2,3));

// Arrow Function com mais de uma linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) { 
        return "Números devem ser de 1 a 9";
    } else {
        return num1 + num2;
    }
}

console.log(somaNumerosPequenos(1,2));