async function fetchData(url, apiKey) {
  try {
    const response = await fetch(url, {
      headers: {
        'x-api-key': apiKey,
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

fetchData('https://reqres.in/api/users/1', 'reqres-free-v1');
