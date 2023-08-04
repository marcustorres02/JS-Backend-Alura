//1 - Calcular a média entre as seguintes notas
//10, 6.5, 8 e 7.5

const nota1 = 10;
const nota2 = 6.5;
const nota3 = 8;
const nota4 = 7.5;

const media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("média: ", media);

//lista para a média
const notas = [10, 6.5, 8, 7.5];

const mediaDasNotas = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log("média: ", mediaDasNotas);

//2 - Um professor acidentalmente passou apenas 3 das 4 notas no sistema para o aluno:
//10, 6 e 8
//Para corrigir, adicione a nota 7 e faça o cálculo da média correta

const novasNotas = [10, 6, 8];
novasNotas.push(7);

console.log(novasNotas);

const mediaNovasNotas = (novasNotas[0] + novasNotas[1] + novasNotas[2] + novasNotas [3]) / novasNotas.length;

console.log("média: ", mediaNovasNotas)

//2 - Um professor acidentalmente lançou 5 notas no sistema para o aluno:
//10, 6, 8, 5.5 e 10
//Para corrigir, remova a última nota e faça o cálculo da média correta

const deletarNota = [10, 6, 8, 5.5, 10];
deletarNota.pop();

console.log(deletarNota);

const mediaDeletarNotas = (deletarNota[0] + deletarNota[1] + deletarNota[2] + deletarNota [3]) / deletarNota.length;

console.log("média: ", mediaDeletarNotas)

/*concat(): Junta dois arrays, colocando o array passado como argumento, logo depois do primeiro. Em português essa operação é conhecida como concatenação.
Não altera o array no qual foi chamado, então precisamos salvar esse resultado em um novo array.

filter(): Retorna uma lista contando todos os elementos que passaram em um teste, ou seja, uma função escrita por nós.
Não altera o array onde foi chamado, então precisamos salvar esse resultado em um novo array.

find():Funciona de forma parecida com o filter, porém retorna apenas o primeiro valor que satisfizer o teste, podendo ser uma string ou um número.

findIndex():Funciona igual o find(), mas retorna o índice em vez do elemento, possibilitando usá-lo em outras partes do código.

lastIndexOf():É igual o findIndex() porém começa do último elemento, não no primeiro.

forEach():Executa uma função em cada elemento do array de forma individual.
Não altera o array original e nem retorna um valor, deixando esse trabalho a cargo da função escolhida.

pop():Retira o último elemento do array.
Altera o array original removendo o elemento.

shift():Retira o primeiro elemento do array.
Altera o array original removendo o elemento e trocando o índice de todos os elementos para um a menos do que eram, o índice 1 passa a ser o 0, o 2 passa a ser o 1, e assim por diante.

push():Adiciona o elemento passado como parâmetro do array, porém na última posição.
Altera o array original com o novo valor.

unshift():Funciona igual ao push(), porém adiciona na primeira posição e acaba trocando o índice de todos os elementos.
Altera o array original com o novo valor.

reduce():Utiliza uma função definida pelo usuário em cada um dos elementos, guardando o resultado em uma variável que pode ser acessada dentro da função que foi definida, retornando um único valor no final, reduzindo o array para um único valor.

reduceRight():Funciona igual o reduce() porém começa do final do array e segue até o início.

reverse(): Inverte a ordem dos elementos do array, então o primeiro vira o último, o segundo o penúltimo e assim por diante.

slice():Copia uma parte do array para outro array.

sort():Organiza o array de acordo com a classificação Unicode, onde os números vêm antes das letras, porém não funciona corretamente para números, onde temos que definir uma função que irá auxiliar o comando.

splice():Consegue remover, um ou mais elementos consecutivos caso o segundo parâmetro tenha um valor maior que 0, e incluir um ou mais elementos a partir de um índice escolhido.*/
