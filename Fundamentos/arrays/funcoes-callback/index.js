// Multiplicar os elementos do Array por 10 utilizando map

const arrayNums = [1, 2, 3, 4];

function multiplicaPorDez(num) {
    return num * 10
}

const arraySomada = arrayNums.map(multiplicaPorDez)

console.log(arraySomada)

// Outro modo sem a função externa:

const arraySomada2 = arrayNums.map(num => num * 10)

console.log(arraySomada2)