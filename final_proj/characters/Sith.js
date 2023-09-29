import CharBase from "./CharBase.js";
import chalk from "chalk";

export default class Sith extends CharBase {
  constructor(name, attDmg, def) {
    super(name, attDmg, def);
    this.name = chalk.red.bold(this.name);
  }

  greet() {
    console.log("Luke, I am your father!");
  }
}
