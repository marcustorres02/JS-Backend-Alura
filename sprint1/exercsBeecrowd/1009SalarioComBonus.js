var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nome = parseFloat(lines[0]);
var salarioFixo = parseFloat(lines[1]);
var vendasEfetuadas = parseFloat(lines[2]);

var saida = parseFloat(salarioFixo + (vendasEfetuadas * 0.15)).toFixed(2);

console.log("TOTAL = R$ " + saida);