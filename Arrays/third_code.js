//Crie uma função que recebe como argumento o nome de um aluno.
//Verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo índice.
//Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];
function exibeNomeENota(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        // const alunos = listaDeAlunosEMedias[0];
        // const medias = listaDeAlunosEMedias[1];

        const [alunos, medias] = listaDeAlunosEMedias;
        
        const indice = alunos.indexOf(aluno);
        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}`);


    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("João");


//Imprima o índice e a lista com os seguintes números:
//100, 200, 300, 400, 500, 600

const numeros = [100, 200, 300, 400, 500, 600];

// Primeira expressão: é executada apenas uma única vez
// Segunda expressão: condição de execução
// Terceira expressão: é executada sempre ao final do bloco
for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index])   
}

//Calcule a média entre as seguintes notas, usando o for:
//[10, 6.5, 8, 7.5]

// trecho do arquivo media.js

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let index = 0; index < notas.length; index++) {
    somaDasNotas += notas[index];
}

const media = somaDasNotas / notas.length;

console.log (`A média das notas é ${media}`);


novaSomaDasNotas = 0;

for (const iterator of notas) {
    novaSomaDasNotas += iterator;
}

const novaMedia = novaSomaDasNotas / notas.length;

console.log (`A média das notas é ${novaMedia}`);


//Exemplo:
const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let MEDIA = 0
for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
      MEDIA += notasGerais[i][j]/notasGerais[i].length;
    }
  }

console.log(`A nova média é ${MEDIA}`);