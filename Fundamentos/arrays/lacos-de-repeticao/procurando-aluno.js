const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

// O método includes verifica se um determinado elemento está no Array ou não.

// O método indexOf retorna o índice de um determinado elemento.

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        // const alunos = listaDeAlunosEMedias[0];
        // const medias = listaDeAlunosEMedias[1];
        const [alunos, medias] = listaDeAlunosEMedias;
        const indice = alunos.indexOf(aluno);
        const mediaDoAluno = medias[indice];
        console.log(`${aluno} está cadastrado, e sua média é ${mediaDoAluno}`);
    } else {
        console.log(`${aluno} não foi encontrado`);
    }
}

exibeNomeENota("João");