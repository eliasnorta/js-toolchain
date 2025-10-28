function promt() {
  const temp = prompt('Please enter the temperature in Celsius:');

  const fahrenheit = (temp * 9) / 5 + 32;
  const kelvin = parseFloat(temp) + 273.15;

  const tempDiv = document.querySelector('div');

  const celsiusP = document.createElement('p');
  celsiusP.textContent = `Celsius: ${temp}°C`;
  tempDiv.appendChild(celsiusP);

  const fahrenheitP = document.createElement('p');
  fahrenheitP.textContent = `Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
  tempDiv.appendChild(fahrenheitP);

  const kelvinP = document.createElement('p');
  kelvinP.textContent = `Kelvin: ${kelvin.toFixed(2)}K`;
  tempDiv.appendChild(kelvinP);
}

promt();
