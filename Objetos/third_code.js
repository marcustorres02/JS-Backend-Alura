const cliente = {
    nome : "Joao",
    idade : 24,
    email : "joao@firma.com",
    telefone : ["115555550", "114444440"],
};

cliente.enderecos = [
    {
    rua : "R. Joseph Climber",
    numero : 1337,
    apartamento : true,
    complemento : "ap 934",
    },
];

for (let chave in cliente) {
    let tipo = typeof cliente[chave];

    if ( tipo !== "object" && tipo !== "function"){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}

const chavesDoObjeto = Object.keys(cliente);
console.log (chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")){
    console.error("Erro. É necessário ter um endereço cadastrado.");
}
function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);
ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
}

console.log(encomenda)