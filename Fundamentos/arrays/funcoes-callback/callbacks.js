const nomes = ["João", "Maria", "José"];

nomes.forEach(function (nome) {
    console.log(nome);
});

// Forma Equivalente utilizando Arrow Function:
nomes.forEach((nome) => {
    console.log(nome);
});

// Outra forma equivalente: criar função callback de forma externa
function imprimeNome(nome) {
    console.log(nome);
}

nomes.forEach(imprimeNome);