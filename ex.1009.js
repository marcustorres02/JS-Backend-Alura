var input = require('fs').readFileSync('/dev/stdin','utf8');
var lines = input.split('\n');
//var lines = ["JOAO","500.00","1230.30"]
var nome = lines[0];
var salariofixo = parseFloat(lines[1]);
var vendas = parseFloat(lines[2]);
var comissao = (vendas*0.15);
var salariofixocomissao = parseFloat(salariofixo+comissao)
console.log('TOTAL = R$ ' + salariofixocomissao);