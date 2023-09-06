const listaLivros = require('../arquivos-base/aula-3/array');

// function encontraMenores(pivo, array){

//     let menores = 0;

//     for (let atual = 0; atual < array.length; atual++) {
//         let produtoAtual = array[atual];

//         if(produtoAtual.preco < pivo.preco){
//             menores++;
//         }
//     }

//     trocaLugar(array, array.indexOf(pivo), menores)
//     return array;
// }

function trocaLugar(array, de, para){
    const elem1 = array[de];
    const elem2 = array[para];

    array[para] = elem1;
    array[de] = elem2; 
}

// function divideNoPivo(array){
//     let pivo = array[Math.floor(array.length / 2)];
//     encontraMenores(pivo, array);
//     let valoresMenores = 0;

//     for (let analisando = 0; analisando < array.length; analisando++) {
//         let atual = array[analisando];

//         if(atual.preco <= pivo.preco && atual !== pivo){
//             trocaLugar(array, analisando, valoresMenores);
//             valoresMenores++;
//         }
//     }

//     return array;
// }
// console.log(divideNoPivo(listaLivros));

// //console.log(encontraMenores(listaLivros[2], listaLivros));

function quicksort(array, esquerda, direita){

    if(array.length > 1){
        let indiceAtual = particiona(array, esquerda, direita);

        if(esquerda < indiceAtual-1){
            quicksort(array, esquerda, indiceAtual -1);
        }
        if(indiceAtual < direita){
            quicksort(array, indiceAtual, direita);
        }
    }

    return array;
}

function particiona(array, esquerda, direita){
    let pivo = array[Math.floor((esquerda + direita) / 2)];
    let atualEsquerda = esquerda;
    let atualDireita = direita;

    while (atualEsquerda <= atualDireita){

        while(array[atualEsquerda].preco < pivo.preco){
            atualEsquerda++;
        }

        while(array[atualDireita].preco > pivo.preco){
            atualDireita--;
        }

        if(atualEsquerda <= atualDireita){
            trocaLugar(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        }
    }
    return atualEsquerda;
}

console.log(quicksort(listaLivros, 0, listaLivros.length - 1))