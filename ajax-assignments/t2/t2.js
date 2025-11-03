async function postData(url, apiKey, data) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();

    if (!res.ok) {
      console.log(data.description);
      return;
    }

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

const data = {
  name: 'John',
  job: 'Software engineer',
};

postData('https://reqres.in/api/users', 'reqres-free-v1', data);
