import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
});

export default async (body) => {
  const result = await api.post('/customer/orders', body);

  return result.data;
};
