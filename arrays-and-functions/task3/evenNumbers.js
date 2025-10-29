const numbers = [];

const wordToStop = 'done';

let num = '';

while (num !== wordToStop) {
  num = prompt('Enter a number (or "' + wordToStop + '" to stop)');

  if (num !== wordToStop) {
    numbers.push(parseInt(num));
  }
}

document.body.appendChild(
  Object.assign(document.createElement('p'), {textContent: 'Even numbers:'})
);

for (const num of numbers) {
  if (num % 2 === 0) {
    document.body.appendChild(
      Object.assign(document.createElement('p'), {textContent: num})
    );
  }
}

document.body.appendChild(
  Object.assign(document.createElement('p'), {textContent: 'Loop complete'})
);
