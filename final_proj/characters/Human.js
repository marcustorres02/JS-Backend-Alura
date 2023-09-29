import CharBase from "./CharBase.js";
import chalk from "chalk";

export default class Human extends CharBase {
  constructor(name, attDmg, def) {
    super(name, attDmg, def);
    this.name = chalk.bold.green(this.name);
  }

  greet() {
    console.log("Never tell me the odds!");
  }
}
