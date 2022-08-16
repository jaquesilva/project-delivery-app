import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
});

export async function requestInfo(body) {
  const result = await api.post('/login', body);

  return result.data;
}
// fonte trybe TFC
export const setToken = (token) => {
  api.defaults.headers.common.authorization = token;
};

export async function requestProducts(endpoint) {
  const result = await api.get(endpoint);

  return result.data;
}

export async function postRegisterAdm(body) {
  const result = await api.post('/admRegister', body);

  return result.data;
}
