const notas = [10, 9.5, 8, 7, 6];

// O método map também é uma estrutura de repetição, sendo apropriado para reescrever arrays, não alterando o array original

const novasNotas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(novasNotas);