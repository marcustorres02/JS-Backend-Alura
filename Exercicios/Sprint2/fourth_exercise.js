const numeros = [1, -2, 1000, 2, 4];

function trocaLugar(array, de, para){
    const elem1 = array[de];
    const elem2 = array[para];

    array[para] = elem1;
    array[de] = elem2; 
}

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

        while(array[atualEsquerda] < pivo){
            atualEsquerda++;
        }

        while(array[atualDireita] > pivo){
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

console.log(quicksort(numeros, 0, numeros.length-1));