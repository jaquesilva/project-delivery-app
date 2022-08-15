import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
});

export default async (userId) => {
  const result = await api.get(`/customer/orders/${userId}`);

  return result.data;
};
