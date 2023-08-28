const quickSort = require("./quickSort");

const numbers = [9, 5, 8, 2, 3, 7, 0, 1, 4, 6];

const sortedNumbers = quickSort(numbers);
let sortedStr = "";
let sortedReverseStr = "";

sortedNumbers.forEach((number) => {
  sortedStr += number + " ";
});

sortedNumbers.reverse().forEach((number) => {
  sortedReverseStr += number + " ";
});

console.log(sortedStr);
console.log(sortedReverseStr);

module.exports = quickSort;
