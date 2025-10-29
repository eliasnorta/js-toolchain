function userPrompt() {
  const a = prompt('Enter triangle side a');
  const b = prompt('Enter triangle side b');
  const c = prompt('Enter triangle side c');

  let type = '';

  if (a === b && b === c) {
    type = 'Equilateral triangle';
  } else if (
    (a === b && a !== c) ||
    (a === c && a !== b) ||
    (b === c && b !== a)
  ) {
    type = 'Isosceles triangle';
  } else if (a !== b && b !== c && a !== c) {
    type = 'Scalene triangle';
  } else {
    type = 'Invalid input';
  }

  document.body.appendChild(
    Object.assign(document.createElement('p'), {textContent: `Side a: ${a}`})
  );
  document.body.appendChild(
    Object.assign(document.createElement('p'), {textContent: `Side b: ${b}`})
  );
  document.body.appendChild(
    Object.assign(document.createElement('p'), {textContent: `Side c: ${c}`})
  );
  document.body.appendChild(
    Object.assign(document.createElement('p'), {
      textContent: `Triangle type: ${type}`,
    })
  );
}

userPrompt();
