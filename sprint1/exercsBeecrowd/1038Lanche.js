var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

const menu = {
    1: 4.00,
    2: 4.50,
    3: 5.00,
    4: 2.00,
    5: 1.50
};

let itemCode = lines[0];
let itemCount = lines[1];

let totalAmount = menu[itemCode] * itemCount;

console.log("Total: R$ " + parseFloat(totalAmount).toFixed(2));