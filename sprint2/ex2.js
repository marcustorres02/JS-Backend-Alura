const users = [
  { nome: "Douglas", habilidades: ["JavaScript", "ReactJS", "Redux"] },
  { nome: "Elton", habilidades: ["PHP", "Ruby On Rails", "Laravel"] },
];

function getUsersDescriptions(users) {
  users.forEach((user) => {
    let habilidadesStr = "";

    user.habilidades.forEach((habilidade, index) => {
      index != user.habilidades.length - 1
        ? (habilidadesStr += habilidade + ", ")
        : (habilidadesStr += habilidade);
    });

    console.log(`O ${user.nome} possui as habilidades: ${habilidadesStr}`);
  });
}

getUsersDescriptions(users);
