import CharBase from "./CharBase.js";
import chalk from "chalk";

export default class Jedi extends CharBase {
  constructor(name, attDmg, def) {
    super(name, attDmg, def);
    this.name = chalk.cyan.bold(this.name);
  }

  greet() {
    console.log("Be one with the force!");
  }
}
