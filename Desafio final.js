export default class Classe {
    #vida
    #dano
    constructor(nome, classe, ataque, vida, defesa) {
        this.nome = nome;
        this.classe = classe;
        this.ataque = ataque || 100;
        this.defesa = defesa;
        this.#dano = 0;
        this.#vida = vida || 100;
    }

    get vida() {
        return this.#vida;
    }

    get dano() {
        return this.#dano;
    }
    
    rolarDados() {
        return Math.floor(Math.random() * 101);
    }

    receberDano(dano) {
        this.#vida -= dano;
        if (this.#vida < 0) {
            this.#vida = 0;
        }
    }
}