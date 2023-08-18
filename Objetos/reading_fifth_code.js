//Buscando parâmetros específicos:
const clientes = require("./fifth_code.json")

function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor));
}

const encontrado = encontrar(clientes, "nome", "Kirby");

console.log(encontrado);

const encontrado2 = encontrar(clientes, "telefone", "1918820860");

console.log(encontrado2);

//Filtro do objeto
function filtrarApartamentoSemComplemento(clientes){
    return clientes.filter((cliente) =>{
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento")); //tem apt, mas não tem o complemento
    });
};

const filtrados = filtrarApartamentoSemComplemento(clientes);

console.log(filtrados);

//Ordenar objetos
function ordenar(lista, propriedade){
    const resultado = lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) {
            return -1;
        }
        if (a[propriedade] > b[propriedade]) {
            return 1;
        }
        return 0;
    });
    return resultado;
};

const ordernadoNome = ordenar(clientes, "nome");

console.log(ordernadoNome);

console.log (ordernadoNome.reverse());