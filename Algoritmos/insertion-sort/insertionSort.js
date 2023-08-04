// Ordenando um array de objeto de livros com Selection Sort

// A ideia do insertion sort consiste em ordenar os itens, inserindo-os na posição corresponde da lista, como cartas em um baralho

const troca = require("./troca");

const livros = require("../pensando-em-algoritmos/listaLivros");

function insertionSort(lista) {

    for (let atual = 1; atual < lista.length; atual++) {
        let analise = atual;
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            troca(lista, analise);
            analise--;
        }
    }

    console.log(lista);
}

insertionSort(livros);