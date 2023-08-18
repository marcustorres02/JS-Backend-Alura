//const input = require('fs').readFileSync('/dev/stdin','utf8');
//const lines = input.split(' ');

var lines = ["4, 3"];

const cardapio = {
    1: 4.00, //cachorro quente
    2: 4.50, //x-salada
    3: 5.00, //x-bacon
    4: 2.00, //torrada simples
    5: 1.50 //refrigerante
};

let itemcode= lines[0];
let itemcount= lines[1];

let totalAmount = cardapio[itemcode] * itemcount;
console.log("Total: R$ "+parseFloat(totalAmount).toFixed(2));