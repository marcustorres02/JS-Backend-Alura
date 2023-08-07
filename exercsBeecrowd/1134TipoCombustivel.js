var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

lines = lines.filter((num) => (num >= 1 && num <= 4));

var fuelTypes = {
    1:"Alcool",
    2:"Gasolina",
    3:"Diesel"
}

var amountPerType = {
    "Alcool": 0,
    "Gasolina": 0,
    "Diesel": 0
}

lines.forEach(element => {
    amountPerType[fuelTypes[element]]++;   
});

console.log("MUITO OBRIGADO");
console.log("Alcool: " + amountPerType["Alcool"]);
console.log("Gasolina: " + amountPerType["Gasolina"]);
console.log("Diesel: " + amountPerType["Diesel"]);
