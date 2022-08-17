import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
});

export default async (body) => {
  const user = await JSON.parse(localStorage.getItem('user'));
  const config = {
    headers: {
      'Content-Type': 'application/json',
      authorization: user.token,
    },
  };

  const result = await api
    .post('/customer/checkout', body, config)
    .then((res) => res.data)
    .catch((error) => console.log(error));

  return result;
};
