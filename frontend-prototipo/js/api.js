const API_BASE_URL = 'http://localhost:3000';

async function apiGet(url) {
  const token = localStorage.getItem('token');
  const response = await fetch(API_BASE_URL + url, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  if (!response.ok) {
    throw new Error('Error ' + response.status);
  }

  return response.json();
}

async function apiPost(url, data) {
  const token = localStorage.getItem('token');
  const response = await fetch(API_BASE_URL + url, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Error ' + response.status);
  }

  return response.json();
}
