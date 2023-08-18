const cliente = {
    nome : "Joao",
    idade : 24,
    email : "joao@firma.com",
    telefone : ["115555550", "114444440"],
    saldo : 200,
    efetuaPagamento : function (valor){
        if (valor > this.saldo){
            console.log("Saldo insuficiente");
        }
        else{
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
        };
    },
};

console.log(cliente.telefone);
cliente.efetuaPagamento(25)

cliente.enderecos = [
    {
    rua : "R. Joseph Climber",
    numero : 1337,
    apartamento : true,
    complemento : "ap 934",
    },
];

cliente.enderecos.push({
    rua : "R. Joseph Ladder",
    numero : 404,
    apartamento : false,
})

console.log(cliente);

const listaApartamentos = cliente.enderecos.filter(
    (enderecos) => enderecos.apartamento === true
)

console.log(listaApartamentos);


const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }
   
   const objPersonagem2 = Object.create(objPersonagem)
   objPersonagem2.nome = "Gandalf, o Cinzento"
   
   console.log(objPersonagem.nome) //Gandalf
   console.log(objPersonagem2.nome) //Gandalf, o Cinzento