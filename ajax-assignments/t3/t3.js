async function fetchData(url, apiKey) {
  try {
    const response = await fetch(url, {
      headers: {
        'x-api-key': apiKey,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Error ${response.status}: ${response.statusText}`);
      console.error('Response body:', errorText);
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData('https://reqres.in/api/unknown/23', 'reqres-free-v1');
