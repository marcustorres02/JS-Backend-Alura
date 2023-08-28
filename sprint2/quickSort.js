function quickSort(numbers) {
  if (numbers.length <= 1) {
    return numbers;
  }

  let pivot = numbers[0];
  let leftArray = [];
  let rightArray = [];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < pivot) {
      leftArray.push(numbers[i]);
    } else {
      rightArray.push(numbers[i]);
    }
  }

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

module.exports = quickSort;
