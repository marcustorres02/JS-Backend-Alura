// Objeto

let pessoa = {
    nome: "jonatas",
    idade: 35,
    feliz: true,
    pets: ["cachorro","gato"],
    carros: {
        camaro: {
            placa: "123456",
            cor: "verde"
        },
        uno: {
            placa: "9876543",
            cor: "branco"
        }
    },
    andar: function(km){
        //alert(pessoa.nome+" andou "+km+" km")
        console.log(pessoa.nome+" andou "+km+" km")
    }
}

pessoa.andar(20)
window.document.getElementById()
console.log(pessoa.carros.uno.placa)