const cliente = {
    nome: "Joao",
    idade: 20,
    email: "joao@dominio.com",
    telefone: ["34 11112222", "34 11113333"],
    saldo: 200, 
    efetuaPagamento: function (valor) {
        return valor > this.saldo ? console.log("Saldo insuficiente") : console.log(`Pagamento realizado. Novo saldo: ${this.saldo -= valor}`);
    }
};

cliente.efetuaPagamento(150);