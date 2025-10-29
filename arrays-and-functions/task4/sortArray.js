const array = [2, 5, 23, 8, 3, 9, 53];

function sortArray(arr) {
  const sortedArray = arr.sort((a, b) => a - b);

  return sortedArray;
}

console.log('Original array: ' + array);
console.log(
  'Sorted array in ascending order: ' + JSON.stringify(sortArray(array))
);
