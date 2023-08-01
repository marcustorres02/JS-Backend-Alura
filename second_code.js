//= atribui o valor a uma variável
//== compara o valor
//=== compara o valor e o tipo

//var pode ser mudada, pode dar bug

var altura=5;
var comprimento=7;

area=altura*comprimento;

console.log(area);

var area;

//let só pode ser utilizado depois de declarado, é uma variável segura
let forma ='retângulo';
let alt =5;
let comp =7;
let A;

if(forma ==='retângulo'){
    A=alt*comp;
}
else{
    A=(alt*comp)/2;
}
console.log(A);

//const não pode ser alterada no programa

const f = 'quadrado';
const altu=5;
const compr = 7;
let ar;

if(f ==='quadrado'){
    ar=altu*compr;
}
else{
    ar=(altu*compr)/2;
}
console.log(ar);


//boolean
const usuarioLogado=true;
const contaPaga=false;

//truthy ou falsy -> não são booleanos, mas comporta como se fosse

//0 ou vazio = false
//1 = true

console.log(0 == false)
console.log("" == false)
console.log(1 == true)

//undefined
//null -> representa vazio ou nada
let minhaVar;
let varNull = null;
console.log(minhaVar)
console.log(varNull)

console.log(minhaVar == varNull)

let numero =3;
let texto ="Alura";

console.log(typeof numero)
console.log(typeof texto)

console.log(typeof minhaVar)
console.log(typeof varNull)


//importancia de saber o tipo de dado que estamos trabalhando
//como trabalhar isso junto com os booleanos

//conversão implicita->converte um tipo de dado em outro.Ex: número em string
const number=456;
const numberString="456";

console.log(number == numberString);

console.log(number + numberString); //transforma o number em string


//conversão explicita

//Number()
//String() -> transforma em string
console.log(number + Number(numberString)); //transforma o numberString em numero

let telefone = 12341234;
console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

console.log("O telefone é " + telefone.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.


let usuarioConectado = false;
console.log(Number(usuarioConectado)); // teremos a conversão da booleana para numero, nesse caso teremos um numero 0.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.

let LARGURA = "10";
let ALTURA = "5";
console.log( + LARGURA * + ALTURA); // teremos a conversão de String para números realizado usando o + antes das variáveis


//var tem um escopo global, então funciona em qualquer parte do código, o que pode gerar possíveis problemas em relação à lógica da aplicação.
//let e const têm escopo local, sendo assim, não podem ser acessadas em outros escopos, e const não pode ter seu valor alterado depois de definido.
