const address = {
  rua: "Av do CPA",
  numero: 1293,
  bairro: "Jardim Cuiabá",
  cidade: "Cuiabá",
  uf: "MT",
};

function getAddressString(address) {
  return `O usuário mora em ${address.cidade}\\${address.uf}, no bairro ${address.bairro}, na ${address.rua}, nº ${address.numero}.`;
}

console.log(getAddressString(address));
