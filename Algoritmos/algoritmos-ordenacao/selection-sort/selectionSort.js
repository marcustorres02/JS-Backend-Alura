// Ordenando um array de objeto de livros com Selection Sort

// Definição do site Medium: sua ideia consiste em ordenar a lista “selecionando” a cada iteração o menores itens possíveis e os colocam da esquerda para a direita.
// Algoritmos de Ordenação: Selection Sort - Henrique Braga

const livros = require("../pensando-em-algoritmos/listaLivros");
const menorValor = require("../pensando-em-algoritmos/menorValor");

for (let atual = 0; atual < livros.length - 1; atual++) {
    let menor = menorValor(livros, atual);

    let livroAtual = livros[atual];
    console.log(`posição atual`, atual);
    console.log(`livro atual`, livros[atual]);
    let livroMenorPreco = livros[menor];
    console.log(`livro menor preco`, livros[menor]);

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
}

console.log(livros);