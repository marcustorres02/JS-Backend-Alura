import Classe from "./Desafio final.js";

export default class Arqueiro extends Classe {
    constructor(nome, classe, ataque, defesa, vida) {
        super(nome, "Gisely", classe, ataque, vida, defesa);
    }

atacar(inimigo) {
    const dadoAtaque = this.rolarDados();
    const dadoDefesa = inimigo.rolarDados();

       if (inimigo.vida <= 0) {
        return `${this.nome} não pode atacar ${inimigo.nome} porque está fora do jogo.`;
    }

    if (dadoAtaque > dadoDefesa) {
        const dano = dadoAtaque - dadoDefesa;
        inimigo.receberDano(dano);

        // Verifica se o inimigo ficou sem vida após o ataque
        if (inimigo.vida <= 0) {
            return `${this.nome} ${this.classe} atacou ${inimigo.nome} e causou ${dano} de dano. ${inimigo.nome} está fora do jogo.`;
        } else {
            return `${this.nome} ${this.classe} atacou ${inimigo.nome} e causou ${dano} de dano.`;
        }
    } else {
        return `${this.nome} atacou ${inimigo.nome}, mas o ataque foi defendido.`;
    }
}

}
