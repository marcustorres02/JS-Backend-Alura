import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role, ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`;
    }
}

const novoAdmin = new Admin('Marcus', 'm@m.com', '2023-01-01');
console.log(novoAdmin.criarCurso('JS', 20))