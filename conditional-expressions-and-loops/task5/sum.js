function userPrompt() {
  const num = prompt('Enter a positive integer');

  let sum = 0;

  if (num <= 0) {
    sum = 'Invalid number';
  } else {
    for (let i = 0; i <= num; i++) {
      sum += i;
    }
  }

  document.body.appendChild(
    Object.assign(document.createElement('p'), {textContent: `Sum: ${sum}`})
  );
}

userPrompt();
