const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para ler 10 números inteiros da entrada
function lerNumeros() {
  return new Promise((resolve, reject) => {
    const numeros = [];
    let contador = 0;

    function lerProximoNumero() {
      rl.question('Digite um número inteiro: ', (numero) => {
        const inteiro = parseInt(numero);
        if (!isNaN(inteiro)) {
          numeros.push(inteiro);
          contador++;

          if (contador < 10) {
            lerProximoNumero();
          } else {
            rl.close();
            resolve(numeros);
          }
        } else {
          console.log('Por favor, digite um número inteiro válido.');
          lerProximoNumero();
        }
      });
    }

    lerProximoNumero();
  });
}

// Função para ordenar números em ordem crescente
function ordenarCrescente(numeros) {
  return numeros.sort((a, b) => a - b);
}

// Função para ordenar números em ordem decrescente
function ordenarDecrescente(numeros) {
  return numeros.sort((a, b) => b - a);
}

async function main() {
  console.log('Digite 10 números inteiros:');
  const numeros = await lerNumeros();
  const crescente = ordenarCrescente(numeros.slice());
  const decrescente = ordenarDecrescente(numeros.slice());

  console.log('Números em ordem crescente:');
  console.log(crescente.join(' '));

  console.log('Números em ordem decrescente:');
  console.log(decrescente.join(' '));
}

main();

