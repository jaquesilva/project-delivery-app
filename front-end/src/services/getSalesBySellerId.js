import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
});

export default async (sellerId) => {
  const result = await api.get(`/seller/orders/${sellerId}`);

  return result.data;
};
