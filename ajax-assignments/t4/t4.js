async function fetchData(url, apiKey) {
  try {
    const response = await fetch(url, {
      headers: {
        'x-api-key': apiKey,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        `Request failed with status ${response.status}: ${response.statusText}`
      );
    }

    console.log(data);
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

fetchData('https://reqres.in/api/users/1', 'reqres-free-v1');
