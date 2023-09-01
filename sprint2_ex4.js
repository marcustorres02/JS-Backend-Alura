function ordenarSequencia() {
  const input = require('readline-sync');

  // Leitura do número de elementos da sequência
  const n = parseInt(input.question('Digite o número de elementos da sequência: '));

  // Leitura dos elementos da sequência
  const sequencia = [];
  for (let i = 0; i < n; i++) {
    const numero = parseInt(input.question(`Digite o ${i + 1}º número: `));
    sequencia.push(numero);
  }

  // Ordena a sequência em ordem crescente
  sequencia.sort((a, b) => a - b);

  // Imprime a sequência ordenada
  console.log('Sequência ordenada:');
  console.log(sequencia.join(' '));
}

ordenarSequencia();
