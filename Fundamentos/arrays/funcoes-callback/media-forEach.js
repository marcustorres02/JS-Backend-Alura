const notas = [10, 6.5, 8, 7.5];

// O método forEach também pode ser utilizado para percorrer Arrays, passando uma função de callback para cada elemento do array.

// Quando uma função é passada como parâmetro de uma outra função, tem-se o nome de Callback

let somaNotas = 0;

notas.forEach(function (nota, indice) {
    somaNotas += nota;
    console.log(indice);
});

const media = somaNotas / notas.length;

console.log(`A media é ${media}`);