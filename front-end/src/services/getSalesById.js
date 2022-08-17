import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
});

export default async (saleId) => {
  const result = await api.get(`/customer/orders/${saleId}`);

  return result.data;
};
