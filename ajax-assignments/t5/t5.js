// API Configuration
const API_BASE_URL = 'https://media2.edu.metropolia.fi/restaurant/api/v1';
const RESTAURANTS_ENDPOINT = `${API_BASE_URL}/restaurants`;
const MENU_LANGUAGE = 'fi';

// Price group labels in order
const PRICE_GROUPS = [
  'Opiskelija',
  'Henkilökunta',
  'Vieras',
  'Oppisopimus',
  'Talon vieras',
];

// DOM Elements
const table = document.querySelector('body table');
const modal = document.querySelector('dialog');

async function fetchData(url, apiKey) {
  try {
    const response = await fetch(url, {
      headers: {'x-api-key': apiKey},
    });
    if (!response.ok) {
      throw new Error(
        `Request failed: ${response.status} ${response.statusText}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

function createRestaurantRow(restaurant) {
  const tr = document.createElement('tr');
  tr.innerHTML = `<td>${restaurant.name}</td><td>${restaurant.address}</td>`;
  tr.addEventListener('click', () => handleRowClick(restaurant, tr));
  return tr;
}

async function handleRowClick(restaurant, tr) {
  table
    .querySelectorAll('tr')
    .forEach((row) => row.classList.remove('highlight'));
  tr.classList.add('highlight');
  const menuHtml = await getMenuHtml(restaurant._id);
  showModal(restaurant, menuHtml);
}

async function getMenuHtml(restaurantId) {
  try {
    const url = `${API_BASE_URL}/restaurants/daily/${restaurantId}/${MENU_LANGUAGE}`;
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(
        `Menu fetch failed: ${response.status} ${response.statusText}`
      );
    const data = await response.json();
    if (data.courses && data.courses.length > 0) {
      return `<ul>${data.courses
        .map(
          (c) =>
            `<li class="menu_item"><div><strong>${
              c.name
            }</strong></div><div class="menu_indent">${
              c.price ? `<small>${c.price}</small>` : ''
            }<div><small class="menu_diets">${c.diets}</small></div></div></li>`
        )
        .join('')}</ul>`;
    }
    return '<p>No menu available for today.</p>';
  } catch (err) {
    return `<p>Error loading menu: ${err.message}</p>`;
  }
}

function showModal(restaurant, menuHtml) {
  modal.innerHTML = `
    <form method="dialog">
      <h2>${restaurant.name}</h2>
      <p><strong>Address:</strong> ${restaurant.address}</p>
      <p><strong>Postal code:</strong> ${restaurant.postalCode}</p>
      <p><strong>City:</strong> ${restaurant.city}</p>
      <p><strong>Phone:</strong> ${restaurant.phone}</p>
      <p><strong>Company:</strong> ${restaurant.company}</p>
      <h3>Today's menu:</h3>
      ${menuHtml}
      <button>Close</button>
    </form>
  `;
  modal.showModal();
}

fetchData('https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants')
  .then((restaurants) => {
    restaurants.forEach((restaurant) => {
      table.appendChild(createRestaurantRow(restaurant));
    });
  })
  .catch((err) => {
    modal.innerHTML = `<form method="dialog"><h2>Error</h2><p>${err.message}</p><button>Close</button></form>`;
    modal.showModal();
  });
