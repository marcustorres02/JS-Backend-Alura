import chalk from "chalk";
import prompt from "prompt-sync";
import Human from "./characters/Human.js";
import Jedi from "./characters/Jedi.js";
import Sith from "./characters/Sith.js";

const promptMsg = prompt({ sigint: true });

const starWars = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⠀⢀⣤⣤⣤⣤⣤⣤⣤⠀⠀⠀⠀⢠⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣼⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣟⠛⠛⠛⠛⠛⣿⣿⣿⣿⡟⠛⠛⠛⠛⠛⢠⣿⣿⣿⣿⠿⣿⣿⣿⣿⡀⠀⠀⢸⣿⣿⣿⣿⡏⠉⠉⢉⣿⣿⣿⣿⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣷⡀⠀⠀⠀⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⣾⣿⣿⣿⡟⠀⢻⣿⣿⣿⣧⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠀⠀⠀⠀⠀
⣤⣤⣤⣤⣤⣤⣤⣤⣤⣬⣿⣿⣿⣿⣿⣷⠀⠀⠀⣿⣿⣿⣿⡇⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣤⣤⣤⣤⣤⣤
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⣿⣿⣿⣿⡇⠀⠀⠀⢀⣿⣿⣿⣿⡿⠿⠿⠿⠿⣿⣿⣿⣿⡀⢸⣿⣿⣿⣿⡇⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠟⠛⠁⠀⠀⠀⠀⠿⠿⠿⠿⠇⠀⠀⠀⠸⠿⠿⠿⠟⠀⠀⠀⠀⠀⠻⠿⠿⠿⠇⠸⠿⠿⠿⠿⠇⠀⠀⠙⠛⠿⠿⠿⠿⠿⠿⠿⠿
⢻⣿⣿⣿⣿⡄⢠⣿⣿⣿⣿⣿⡆⠀⣾⣿⣿⣿⡟⠀⢀⣾⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣦⣄⠀⠀⠀⠀⣠⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿
⠈⣿⣿⣿⣿⣷⣼⣿⣿⣿⣿⣿⣿⣸⣿⣿⣿⣿⠁⠀⣼⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⣿⣿⣿⣿⣿⠿⠿⢿⣿⣿⣿⣿⣇⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⢠⣿⣿⣿⣿⠏⢿⣿⣿⣿⣇⠀⠀⠀⣿⣿⣿⣿⣿⣀⣀⣀⣼⣿⣿⣿⡟⠀⠀⢹⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀⠀
⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⣾⣿⣿⣿⣟⣀⣸⣿⣿⣿⣿⡀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠙⢿⣿⣿⣿⣿⣧⠀⠀⠀⠀
⠀⠀⠘⣿⣿⣿⣿⣿⣿⠋⣿⣿⣿⣿⣿⣿⠇⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣶⣶⣶⣶⣶⣶⣾⣿⣿⣿⣿⣿⠇⠀⠀⠀
⠀⠀⠀⢻⣿⣿⣿⣿⡏⠀⢹⣿⣿⣿⣿⡟⠀⢀⣿⣿⣿⣿⡟⠛⠛⠛⠛⣿⣿⣿⣿⡆⠀⣿⣿⣿⣿⣿⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠀⠀⠀⠀
⠀⠀⠀⠈⠉⠉⠉⠉⠀⠀⠀⠉⠉⠉⠉⠁⠀⠈⠉⠉⠉⠉⠀⠀⠀⠀⠀⠉⠉⠉⠉⠉⠀⠉⠉⠉⠉⠉⠀⠀⠀⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠁⠀⠀⠀⠀⠀
`;

const duels = `
 _______   __    __   _______  __          _______.
|       \\ |  |  |  | |   ____||  |        /       |
|  .--.  ||  |  |  | |  |__   |  |       |   (----\`
|  |  |  ||  |  |  | |   __|  |  |        \\   \\    
|  '--'  ||  \`--'  | |  |____ |  \`----.----)   |   
|_______/  \\______/  |_______||_______|_______/    
`;

const iconRight = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⠶⠶⠾⠿⠛⠛⠛⠛⠓⠒⠲⠶⠤⣤⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡴⠟⠋⣁⣤⣴⣶⣶⡶⠶⠖⠒⠂⠀⠀⠀⠀⠀⠀⠈⠉⠛⠷⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠾⠋⣠⣴⢟⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠲⣤⡙⠻⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⡼⠃⣠⣾⢟⣴⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣷⡌⠻⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⡾⠁⣰⣿⣿⣾⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡀⠘⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣾⠁⢀⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⡇⠀⠘⣧⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣸⡏⠀⢸⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⣿⣧⠀⠀⢿⡆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⡇⠀⢸⣿⣿⣿⣿⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⣿⣿⠀⢠⣼⣇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⣿⡇⠀⢸⣿⣿⣿⣿⠀⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⣿⣿⠀⢸⣿⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣸⣿⣇⣀⣾⣿⣿⣿⣿⣰⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠿⠿⢟⣀⣸⣿⣿⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⡶⠶⠶⠶⠶⠖⠒⠒⠒⣾⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠘⣿⣿⣿⣿⠟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣦⣤⣤⣤⣤⣤⣤⣿⣿⣿⡿⠿⡟⢻⠋⢹⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢸⢻⡏⣿⣿⡄⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠋⠁⣀⣀⣀⡀⠈⠉⠻⣿⣿⣷⣤⣀⡀⣿⣿⣿⠇⢰⠃⣸⢠⣼⣧⡀⠀⠀⠀⠀
⠀⠀⠀⢰⣿⣏⡇⢻⢿⢧⣸⣿⣿⣿⣿⣿⣿⡿⠟⠋⣁⣴⣾⠟⠉⠀⠀⠉⠓⢤⡀⠈⠙⢿⣿⣿⣿⣿⣿⡟⠀⡜⠀⡏⢸⣿⣿⡇⠀⠀⠀⠀
⠀⠀⠀⠸⣿⣿⠏⣾⣮⢎⠻⠿⠟⠛⠛⠉⢁⣠⡴⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠈⠳⢤⡀⠈⠙⠛⠛⠋⠀⣼⣿⠀⡇⢘⣿⣿⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠸⣿⡀⣿⣿⣷⣀⣠⠤⠤⠒⠋⢡⢫⣾⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠓⠲⠤⢤⣤⣾⣿⣿⠀⣧⠻⣿⣿⣿⣷⣤⠀⠀
⠀⠀⠀⠀⢠⣿⠇⣿⣿⣿⡿⠁⠀⠀⠀⠀⢀⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣿⣿⡀⠘⢦⡈⠙⢿⣿⣿⣷⡀
⠀⠀⢀⣾⠟⠁⢀⠘⣿⣿⠃⠀⠀⠀⠀⠀⣸⣿⡇⠀⠀⠀⢀⣴⣾⣿⣿⣿⣶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⢻⠀⠀⠙⢦⡀⠙⢿⣿⡇
⠀⣰⣿⠃⠀⢀⣾⣧⡈⠟⠀⠀⠀⠀⠀⠀⠘⣿⡁⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⡀⠀⠀⠀⠀⠀⠀⡱⣫⠊⠀⢀⣤⡄⠹⣆⠘⣿⣿
⢰⣿⣧⡖⠼⢟⣻⣿⣿⣦⡀⢤⣀⠀⠀⠀⢠⣿⣿⣿⣿⡿⠿⣛⠛⠛⠛⠛⠛⠿⢿⣿⣿⣿⣦⡀⠀⠀⠀⢎⠞⠁⠀⣠⣾⠟⠀⠀⠘⡄⣿⡏
⣿⣿⡿⠁⠈⠽⢚⣻⣿⣿⣿⣾⣿⠿⣂⣴⣿⣿⣿⣿⣿⣿⣿⠋⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⢿⣿⣦⠀⢠⠏⠀⣠⣾⣿⠏⠀⠀⠀⡇⣇⣿⠃
⢿⣿⡇⡇⠀⠘⣩⠴⠛⣛⣩⣟⣛⠫⠉⠉⠻⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠈⣛⣀⠐⠻⠿⠃⠀⠀⣰⣿⣿⣿⠏⠀
⠸⣿⣷⡳⣀⢀⣠⣶⣿⡟⠁⠀⠈⠙⠲⣄⠀⠈⢻⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠔⠉⠀⠀⠀⠀⠀⢦⣀⣼⣿⣿⡿⠋⠀⠀
⠀⠹⣿⣿⣮⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠘⣦⠀⠀⢻⣿⣿⠿⠒⠋⣉⠁⠐⢤⡀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⢀⢻⣿⣿⠟⠁⠀⠀⠀
⠀⠀⠹⣿⣿⣿⢿⣿⡟⠀⠀⠀⣠⠤⠤⢤⣾⣧⡀⠈⡿⡁⢰⣦⣠⣿⣧⡀⠀⣿⡄⣄⣀⣀⣁⣀⠤⠤⢤⣀⠀⠀⠀⢸⡎⣿⠏⠀⠀⠀⠀⠀
⠀⠀⠀⠙⢿⣿⠀⠻⣿⣆⠀⠞⢡⣴⠶⢤⣍⡛⠿⠛⠀⣷⢸⣿⣿⣿⣏⣷⠈⣽⣷⣌⠉⢉⣡⣴⣶⣶⣤⡈⠱⡄⠀⣼⢱⡿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠻⣧⡤⠄⣉⡀⢰⣿⡇⡖⠛⢻⣿⡶⠄⠀⣿⣾⣿⣿⣿⣿⢹⣷⣦⠀⠈⣿⢿⠟⠛⢮⣿⡿⣿⡄⢹⠰⢃⣾⠇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠙⢿⣽⡒⠅⠈⠻⣷⣧⣤⣼⡿⠾⠀⠀⠻⣿⣿⣿⣿⣿⣾⣿⠏⠀⠀⠴⢿⣦⡤⠜⠩⠞⠟⠁⡜⣠⡾⠋⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⠙⢦⡀⠀⠀⠀⠈⠀⠀⠀⠀⢀⣠⣾⠿⠿⠿⠿⠿⠿⣿⣦⡀⣀⣀⠀⠀⠀⠀⠀⠀⢀⣠⡾⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⠲⠤⠤⣤⣤⠴⠖⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⢭⣍⣀⣀⣠⡤⠶⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`;

console.log(chalk.yellow(starWars));
console.log(iconRight);
console.log(chalk.blue(duels));

console.log("\nType a name for the", chalk.red.bold("Sith: "));
const sithName = promptMsg();

console.log("\nType a name for the", chalk.cyan.bold("Jedi: "));
const jediName = promptMsg();

console.log("\nType a name for the", chalk.bold.green("Human: "));
const humanName = promptMsg();

console.log("\n");
console.log(
  chalk.red.bold(sithName) +
    chalk.bold("  X  ") +
    chalk.cyan.bold(jediName) +
    chalk.bold("  X  ") +
    chalk.bold.green(humanName)
);

console.log(chalk.bold.italic.bgWhite.magenta("FIGHT!\n\n"));

const sith = new Sith(sithName, 85, 80);
const jedi = new Jedi(jediName, 80, 70);
const human = new Human(humanName, 75, 55);

let chars = [sith, jedi, human];

while (true) {
  let charsRound = [...chars];

  console.clear();
  console.log(chalk.bold("Current: "));
  charsRound.forEach((char) => {
    console.log(char.name + " | " + char.life + " " + "HP");
  });
  console.log("\n\n");

  console.log(
    `Select a character to be ${chalk.bold.underline.italic("attacked")}: `
  );
  charsRound.forEach((char, index) => {
    console.log(chalk.bold(`[${index}]  `) + char.name);
  });
  console.log("\n");

  let attacked = Number(promptMsg());
  while (attacked >= charsRound.length) {
    console.log("Type a valid number.\n");
    attacked = Number(promptMsg());
  }

  const attackedChar = charsRound[attacked];
  charsRound.splice(attacked, 1);

  let attackingStr =
    "\n" +
    `Select a character to ${chalk.bold.italic.underline("attack")}:` +
    "\n";

  charsRound.forEach((char, index) => {
    attackingStr += `${chalk.bold(`[${index}]`)}   ` + char.name + "\n";
  });

  attackingStr += "\n";

  console.log(attackingStr);
  let attacking = Number(promptMsg());

  while (attacking >= charsRound.length) {
    console.log("Type a valid number.\n");
    attacking = Number(promptMsg());
  }

  charsRound[attacking].attack(attackedChar);

  if (attackedChar.isDefeated) {
    chars.splice(chars.indexOf(attackedChar), 1);
    console.log(
      chalk.bold.italic(
        attackedChar.name + " WAS DEFEATED! Press any key and press ENTER"
      )
    );
    promptMsg();
  }

  if (chars.length == 1) {
    console.clear();
    console.log(chalk.bold.italic(`WINNER: ${chars[0].name}`));
    break;
  }
}
