export default class CharBase {
  constructor(name, attDmg, def) {
    this.name = name;
    this.attDmg = attDmg;
    this.def = def;
    this.life = 100;
  }

  attack(target) {
    target.life -= (this.attDmg * (1 - target.def / 100)).toFixed();
  }

  get isDefeated() {
    return this.life == 0 || this.life < 0 ? true : false;
  }

  greet() {}
}
