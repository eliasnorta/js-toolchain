function userPrompt() {
  const x1 = prompt('Enter coordinate for point x₁');
  const x2 = prompt('Enter coordinate for point x₂');

  const y1 = prompt('Enter coordinate for point y₁');
  const y2 = prompt('Enter coordinate for point y₂');

  distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  const p = document.querySelector('.distance');
  const distanceP = document.createElement('p');
  distanceP.textContent = `Euclidean distance: ${distance}`;
  p.appendChild(distanceP);
}

userPrompt();
