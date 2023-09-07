import getFile from "./index.js";
import chalk from "chalk";
import fs from "fs";
import validatedList from "./http-validation.js";

const path = process.argv[2];

async function printLinks(validate, links, fileName = "") {
  if (validate) {
    console.log(
      chalk.yellow("Link of valid links:\n"),
      chalk.black.bgGreen(fileName),
      await validatedList(links)
    );
  } else {
    console.log(
      chalk.yellow("Link of valid links:\n"),
      chalk.black.bgGreen(fileName),
      links
    );
  }
}

async function proccessText(filePath) {
  const validate = process.argv[3] === "--validate";

  try {
    fs.lstatSync(filePath);
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log("File or directory does not exist.");
      return;
    }
  }

  if (fs.lstatSync(path).isFile()) {
    const result = await getFile(filePath);
    printLinks(validate, result);
  } else if (fs.lstatSync(path).isDirectory()) {
    const files = await fs.promises.readdir(path);
    files.forEach(async (fileName) => {
      const list = await getFile(`${path}/${fileName}`);
      printLinks(validate, list, fileName);
    });
  }
}

proccessText(path);
