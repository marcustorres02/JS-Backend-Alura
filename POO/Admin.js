import User from "./User.js";

export default class Admin extends User{
    constructor (nome, email, nascimento, role= 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeDoCurso, Vagas){
        return `Curso de ${nomeDoCurso} criado com ${Vagas} vagas`
    }
}

// const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2021-01-01');
// console.log(novoAdmin.criarCurso('JS', 20));
// console.log(novoAdmin.exibirInfos());