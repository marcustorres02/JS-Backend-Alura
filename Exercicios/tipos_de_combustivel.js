const Alcool = 1;
const Gasolina = 2;
const Diesel = 3;
const Fim = 4;

const codigo = 8;
let qntClientes = 0;
let combustivel = "";

if (codigo == Alcool){
    qntClientes = 1;
    combustivel = "Alcool";
    console.log("Muito obrigado");
    console.log(combustivel, ": ", qntClientes);
}
else if (codigo == Gasolina){
    qntClientes = 2;
    combustivel = "Gadolina"
    console.log("Muito obrigado");
    console.log(combustivel, ": ", qntClientes);
}
else if (codigo == Diesel){
    qntClientes = 0;
    combustivel = "Disel"
    console.log("Muito obrigado");
    console.log(combustivel, ": ", qntClientes);
}
else if (codigo == Fim){
    console.log("Muito obrigado");
    return 0;
}
else{
    console.log ("invalido");
}

