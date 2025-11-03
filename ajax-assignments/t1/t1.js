async function fetchData(url, apiKey) {
  try {
    const res = await fetch(url, {
      headers: {
        'x-api-key': apiKey,
      },
    });

    const result = await res.json();

    if (!res.ok) {
      console.log(data.description);
      return;
    }

    console.log(result);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

fetchData('https://reqres.in/api/users/1', 'reqres-free-v1');
