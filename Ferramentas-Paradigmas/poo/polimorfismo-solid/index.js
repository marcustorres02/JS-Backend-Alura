import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

// const novoUser = new User('Marcus', 'm@m.com', '2023-01-01');
// console.log(novoUser.exibirInfos());

// const novoAdmin = new Admin('Joao', 'j@j.com', '2022-01-01');
// console.log(novoAdmin.nome);
// novoAdmin.nome = 'Rogerio';
// console.log(novoAdmin.nome);

const novoDocente = new Docente('Guilherme', '@g@g.com', '2020-01-01');
console.log(novoDocente.exibirInfos());