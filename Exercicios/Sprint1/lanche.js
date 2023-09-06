const cachorroQuente = 1;
const xSalada = 2;
const xBacon = 3;
const torradaSimples = 4;
const refrigerante = 5;

const precoCachorroQuente = 4.00;
const precoXSalada = 4.50;
const precoXBacon = 5.00;
const precoTorradaSimples = 2.00;
const precoRefrigerante = 1.50;

let valorProduto = 0;
const produto = 3;
const quantidade = 2;

if (produto == cachorroQuente){
    valorProduto = precoCachorroQuente;
}
else if (produto == xSalada){
    valorProduto = precoXSalada;
}
else if (produto == xBacon){
    valorProduto = precoXBacon;
}
else if (produto == torradaSimples){
    valorProduto = precoTorradaSimples;
}
else if (produto == precoRefrigerante){
    valorProduto = precoRefrigerante;
}

const total = quantidade*valorProduto;

console.log("Total: R$ ", total.toFixed(2));