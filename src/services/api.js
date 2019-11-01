import axios from 'axios';

const api = axios.create({ baseURL: process.env.REACT_APP_ALPHA_VANTAGE });

api.interceptors.request.use((config) => {
  const { url } = config;
  const key = `apikey=${process.env.REACT_APP_KEY}`;

  config.url += url.includes('?') ? `&${key}` : `?${key}`;

  return config;
});

export default api;
