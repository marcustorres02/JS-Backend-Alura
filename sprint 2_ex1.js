let endereço = {
    rua: "Av dp CPA",
    numero: 1293,
    bairro: "Jardim Cuiabá",
    cidade: "Cuiabá",
    uf: "MT",
};
   
console.log(`O usuário mora em ${endereço.cidade} / ${endereço.uf}, no bairro ${endereço.bairro}, na ${endereço.rua}, nº ${endereço.numero}.`);

// primeiro usei o "let" para declarar os objetos e em seguida utilizei o "console.log" para mostrar as propriedades do objeto usando uma string formatada que acessa essas propriedades.