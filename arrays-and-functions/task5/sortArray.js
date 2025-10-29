const arr1 = [2, 5, 23, 8, 3, 9, 53];
const arr2 = [42, 2, 11, 3, 30, 8, 3];

function sortArray(numbers, order) {
  let sortedArray;
  if (order == 'asc') {
    sortedArray = numbers.sort((a, b) => a - b);
  } else if (order == 'desc') {
    sortedArray = numbers.sort((a, b) => b - a);
  } else {
    sortedArray = 'Invalid';
  }

  return sortedArray;
}

console.log('Original array1: ' + arr1);
console.log(
  'Sorted array in ascending order: ' + JSON.stringify(sortArray(arr1, 'asc'))
);

console.log('Original array2: ' + arr2);
console.log(
  'Sorted array in descending order: ' + JSON.stringify(sortArray(arr2, 'desc'))
);
