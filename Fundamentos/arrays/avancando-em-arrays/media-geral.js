const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];

const salaJava = [6, 5, 8, 9, 5, 6];

const salaPython = [7, 3.5, 8, 9.5];

// O método reduce vai iterar sobre o Array, somando os elementos

function calculaMedia(notasSala) {
    const somaNotas = notasSala.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0)

    const media = somaNotas / notasSala.length;

    return media;
}

console.log(`A media da sala de JS é ${calculaMedia(salaJS)}`);
console.log(`A media da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`A media da sala de Python é ${calculaMedia(salaPython)}`);