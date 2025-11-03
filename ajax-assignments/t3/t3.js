async function fetchData(url, apiKey) {
  try {
    const response = await fetch(url, {
      headers: {
        'x-api-key': apiKey,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Error ${response.status}: ${response.statusText}`);
      console.error('Response body:', errorText);
      throw new Error('Network error');
    }

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData('https://reqres.in/api/unknown/23', 'reqres-free-v1');
