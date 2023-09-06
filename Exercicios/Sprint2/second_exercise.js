var usuarios = [{
        nome: "Douglas",
        habilidades: ["JavaScript", "ReactJS", "Redux"]
    },
    {
        nome: "Elton",
        habilidades: ["PHP", "Ruby on Rails", "Laravel"]
    }
];

function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor));
};

const douglas = encontrar(usuarios, "nome", "Douglas");

const elton = encontrar(usuarios, "nome", "Elton");

console.log(`O ${douglas.nome} possui as habilidades: ${douglas.habilidades[0]}, ${douglas.habilidades[1]}, ${douglas.habilidades[2]}`);

console.log(`O ${elton.nome} possui as habilidades: ${elton.habilidades}`);