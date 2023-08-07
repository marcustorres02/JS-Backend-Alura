var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = lines[0];
let numbers = lines[1].split(' ');
let smallest = numbers[0];
let position = 0;

for (let i=0; i<n; i++){
    numbers[i] = parseInt(numbers[i]);
    if (numbers[i] < smallest){
        smallest = numbers[i];
        position = i;
    }
}

console.log("Menor valor: " + smallest);
console.log("Posicao: " + position);