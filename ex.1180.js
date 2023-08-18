const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');
//var lines = ["10", "1 2 3 4 -5 6 7 8 9 10"]
let n = Number(lines[0]);
let numeros = lines[1].split(" ");
let min = 0; 
let posicao = 0;
for(var i = 0; i < n; i++){
    x = parseInt(numeros[i]);
    if(i===0) {
        min = x; posicao = i;
    } 
    else if(x < min){ 
        min = x; posicao = i;
    }
}
console.log(`Menor valor: ${min}
Posicao: ${posicao}`);