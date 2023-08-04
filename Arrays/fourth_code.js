//Calcule a média entre as seguintes notas usando o forEach:
//[10, 6.5, 8, 7.5]

const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

notas.forEach(function (nota) {
    somaDasNotas += nota;
});

const media = somaDasNotas / notas.length;

console.log (`A média das notas é ${media}`);


//Exemplo:
const nomes = ["Evaldo", "Mari", "Camis"];

nomes.forEach((nome) => {
  console.log(nome);
});

function imprimeNome(nome){
    console.log(nome);
}

nomes.forEach(imprimeNome);


//Um aluno recebeu um ponto extra nas suas notas. Adicione esse ponto nas notas da seguinte lista:
//[10, 9.5, 8, 7, 6]

const nota = [10, 9.5, 8, 7, 6];

const notaAtualizada = nota.map((valor) => {
    return valor + 1 >= 10 ? 10 : valor + 1;
})

console.log(notaAtualizada);


//Padronizar a lista de alunos para conter apenas letras maiúsculas.
//["ana Julia", "Caio vinicius", "BIA silva"]

const nome = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomeAtualizado = nome.map((pessoa) => {
    return pessoa.toUpperCase();
})

console.log(nomeAtualizado);