//1- Divida os alunos da sala abaixo em duas listas com a mesma quantidade de alunos:
//'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'

const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = alunos.slice(0, alunos.length / 2);
const sala2 = alunos.slice(alunos.length / 2);

console.log("sala 1: \n", sala1);
console.log("sala 2: \n", sala2);

//2- Crie uma lista de chamada com os seguintes alunos:
//"João", "Ana", "Caio", "Lara", "Marjorie", "Leo"
//Porém, a Ana e o Caior mudaram de escola e o Rodrigo entrou nesta sala. Atualize a lista.

const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomes.splice(1, 2, "Rodrigo");

console.log("lista alutalizada: ", nomes);

//Haverá uma palestra sobre padrões de projetos para estudantes das salas de JavaScript e Python. 
//Junte ambas as salas em uma única lista que exiba o nome de todas as pessoas.

const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Ju", "Leo", "Raquel"];

const salasUnificadas = salaJS.concat(salaPython); //a ordem dos arrays importa

console.log("salas da palestra:", salasUnificadas);

/*Foram fornecidas duas listas para nós. A primeira contém os nomes de quatro estudantes e a segunda possui suas respectivas médias:
'João', 'Juliana', 'Caio', 'Ana'
10, 8, 7.5, 9
Crie uma lista que contenha essas duas listas.*/

const estudantes = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeEstudantesEMedias = [estudantes, medias];

console.log("As listas juntas ficam: ", listaDeEstudantesEMedias);

console.log(`A aluna da posição 1 da lista de alunos é: ${listaDeEstudantesEMedias[0][1]}. 
A nota dessa aluna é ${listaDeEstudantesEMedias[1][1]}`);


const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])

console.log(arrayConcat)
console.log(arrayOriginal)

const array1 = [50, 60, 70]
const array2 = array1.concat([80, [90, 100]])

console.log(array2)
console.log(array1)
