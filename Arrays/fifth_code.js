//Depois de calcular a média dos alunos, precisamos mostrar quem está reprovado entre os alunos:
/*
Ana: 7
Marcos: 4.5
Maria: 8
Mauro: 7,5
*/
const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((aluno, indice) => {
    return medias[indice] < 7;
})

console.log(reprovados);

/*
Com a média de todos os alunos de 3 salas, calcule a média geral de cada sala:

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];

const salaJava = [6, 5, 8, 9, 5, 6];

const salaPython = [7, 3.5, 8, 9.5];
*/

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
 const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
     return acumulador + nota;
    }, 0);
    
    const media = somaDasNotas / notasDaSala.length;

    return media;
}

console.log(`${calculaMedia(salaJS)}`);


/*
Considere o seguinte array de notas:

const notas = [7, 7, 8, 9];

Crie um novo array com a nota 10 a mais, sem alterar o array original.
*/

const notas = [7, 7, 8, 9];

    const novasNotas = [...notas];

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);


/*
Um professor acidentalmente adicionou nomes repetidos na lista de chamada:

Ana
Clara
Maria
Maria
João
João
João
Remova os nomes repetidos, deixando apenas um de cada.
*/

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes);

const nomesAtualizados = [...meuSet]

console.log(nomesAtualizados);