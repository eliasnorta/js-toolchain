const numbers = [];

for (let i = 0; i < 5; i++) {
  const num = parseInt(prompt('Enter a number'));
  numbers.push(num);
}

console.log('Numbers: ' + JSON.stringify(numbers));

const guessNum = parseInt(prompt('Enter a Number to Search'));

if (numbers.includes(guessNum)) {
  alert('Number ' + guessNum + ' is found in the array.');
} else {
  alert('Nunber ' + guessNum + ' is not found in the array.');
}

numbers.pop(numbers.length - 1);

console.log('Updated numbers: ' + JSON.stringify(numbers));

console.log('Sorted numbers: ' + JSON.stringify(numbers.sort((a, b) => a - b)));
