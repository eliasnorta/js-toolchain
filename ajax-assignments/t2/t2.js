async function postData(url, data) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

const data = {
  first_name: 'John',
  last_name: 'Smith',
  email: 'john@example.com',
};

postData('https://reqres.in/api/users', data);
