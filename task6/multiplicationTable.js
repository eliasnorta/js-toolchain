function userPrompt() {
  const num = parseInt(prompt('Enter a positive integer'));

  const table = document.createElement('table');

  for (let i = 1; i <= num; i++) {
    const row = document.createElement('tr');
    for (let j = 1; j <= num; j++) {
      const cell = document.createElement('td');
      cell.textContent = i * j + '\u00A0\u00A0\u00A0\u00A0';
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  document.body.appendChild(table);
}

userPrompt();
