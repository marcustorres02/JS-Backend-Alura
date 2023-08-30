const usuarios = [
    {
    nome: "Douglas",
    habilidades: ["Javascript", "ReactJS", "Redux"],

},
{
    nome: "Elton",
    habilidades: ["PHP", "Ruby on Rails", "Laravel"],
}
];
const showMessage = usuarios => 
   usuarios.forEach(({nome, habilidades}) => 
      console.log(`O ${nome} possui as habilidades: ${habilidades.join(", ")}`));
showMessage(usuarios);