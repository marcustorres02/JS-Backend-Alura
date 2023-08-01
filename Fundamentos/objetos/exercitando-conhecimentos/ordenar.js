const clientes = require("./clientes.json");

// A função sort() ordena uma lista com base na comparação de dois objetos

function ordenar(lista, propriedade) {
    const resultado = lista.sort((a,b) => {
        if (a[propriedade] < b[propriedade]){
            return -1;
        }
        if (a[propriedade] > b[propriedade]){
            return 1;
        }
        return 0;
    })

    return resultado;
}

const ordenadoNome = ordenar(clientes, "nome");
// const ordenadoInverso = ordenadoNome.reverse();

console.log(ordenadoNome);