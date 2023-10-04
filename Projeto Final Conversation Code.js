// Definindo os personagens
const arqueiro = {
  nome: "Arqueiro",
  ataque: 20,
  defesa: 10,
  vida: 100,
};

const cavaleiro = {
  nome: "Cavaleiro",
  ataque: 15,
  defesa: 20,
  vida: 100,
};

const mago = {
  nome: "Mago",
  ataque: 25,
  defesa: 5,
  vida: 100,
};

// Lista de personagens
const personagens = [arqueiro, cavaleiro, mago];

// Função para escolher um oponente aleatório
function escolherOponente() {
  const oponenteIndex = Math.floor(Math.random() * personagens.length);
  return personagens[oponenteIndex];
}

// Função para realizar um turno de ataque
function realizarAtaque(atacante, defensor) {
  const dano = atacante.ataque - defensor.defesa;
  if (dano > 0) {
    defensor.vida -= dano;
  }
}

// Função para verificar se o jogo terminou
function verificarFimDoJogo() {
  const jogadoresVivos = personagens.filter((personagem) => personagem.vida > 0);
  return jogadoresVivos.length <= 1;
}

// Loop principal do jogo
let rodada = 1;
while (!verificarFimDoJogo()) {
  console.log(`Rodada ${rodada}`);

  for (const jogador of personagens) {
    if (jogador.vida > 0) {
      const oponente = escolherOponente();
      if (oponente.vida > 0) {
        console.log(`${jogador.nome} ataca ${oponente.nome}!`);
        realizarAtaque(jogador, oponente);
        console.log(`${oponente.nome} tem ${oponente.vida} de vida restante.`);
      }
    }
  }

  rodada++;
}

// Encontrando o vencedor
const vencedor = personagens.find((personagem) => personagem.vida > 0);
console.log(`${vencedor.nome} é o vencedor!`);
