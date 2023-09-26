const user = {
    nome: "Joao",
    email: "j@j.com",
    nascimento: "2023/01/01",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: "Marcus",
    email: "m@m.com",
    role: "admin",
    criarCurso() {
        console.log("Curso criado!");
    }
}

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();