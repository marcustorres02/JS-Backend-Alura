import chalk from "chalk";
import fs from "fs";

function getLinks(txt) {
  const regex = /\[([^\[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;

  const matches = [...txt.matchAll(regex)];

  const results = matches.map((match) => ({ [match[1]]: match[2] }));

  return results.length !== 0 ? results : "No links inside of file";
}

//getLinks(txt);

function handleError(error) {
  throw new Error(chalk.red(error.code, "File not found in directory"));
}

async function getFile(filePath) {
  try {
    const encoding = "utf-8";
    const txt = await fs.promises.readFile(filePath, encoding);
    return getLinks(txt);
  } catch (error) {
    handleError(error);
  }
}

export default getFile;
