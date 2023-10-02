import Arqueiro from "./arqueiro.js";
import Mago from "./mago.js";
import Gatuno from "./gatuno.js";

const arqueiro = new Arqueiro("Arqueiro", 100, 100, 100);
const mago = new Mago("Mago", 100, 100, 100);
const gatuno = new Gatuno("Gatuno", 100, 100, 100);

const personagens = [arqueiro, mago, gatuno];

function turnoDeAtaque(jogadorAtual) {
    if (jogadorAtual.vida <= 0) {
        console.log(`${jogadorAtual.nome} não pode atacar porque está fora do jogo.`);
        return;
    }

    for (const alvo of personagens) {
        if (alvo !== jogadorAtual && alvo.vida > 0) {
            const resultadoAtaque = jogadorAtual.atacar(alvo);
            console.log(resultadoAtaque);
            console.log(`Vida de ${alvo.nome}: ${alvo.vida}`);
        }
    }
}

while (personagens.filter(personagem => personagem.vida > 0).length > 1) {
    for (const jogadorAtual of personagens) {
        turnoDeAtaque(jogadorAtual);
    }
}

const vencedor = personagens.find(personagem => personagem.vida > 0);
console.log(`O vencedor é: ${vencedor.nome}`);
