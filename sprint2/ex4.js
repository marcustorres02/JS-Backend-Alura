const quickSort = require("./quickSort");

const numbers = [1, -7, 1000, 2, 4];

let outputStr = "";

quickSort(numbers).forEach((number) => {
  outputStr += number + " ";
});

console.log(outputStr);
