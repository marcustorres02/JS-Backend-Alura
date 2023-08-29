// Importando biblioteca chalk, que coloca cores e efeitos de texto no console
// Biblioteca fs é nativa do node.js -> Com métodos internos para ler arquivos e manipulação

import fs from 'fs';
import chalk from 'chalk';

// Tratamento de Erros

function trataErro(erro) {
    console.log(erro);
    throw new Error(chalk.red(erro.code, "Não há arquivo no diretório"));
}

// Trabalhando com código assincrono - async / await

async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(chalk.yellow(texto)); 
    } catch (erro) {
        trataErro(erro);
    } finally {
        console.log("FIM DO PROGRAMA");
    }
}

// Trabalhando com código assincrono - promises com then
// Promises (Promessas): forma para trabalhar com código assincrono.

// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.promises
//         .readFile(caminhoDoArquivo, encoding)
//         .then((texto) => console.log(chalk.green(texto)))
//         .catch((trataErro));
// }

// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if(erro) {
//             trataErro(erro);
//         }
//         console.log(chalk.yellow(texto));
//     })
// }

pegaArquivo("./arquivos/texto.md");
pegaArquivo("./arquivos/");