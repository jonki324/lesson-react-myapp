import axios from 'axios';

const handleErrorResponse = (error) => {
  console.error(error);
  return Promise.reject(error);
};

const api = axios.create();
api.defaults.baseURL = 'http://localhost:4000/api';
api.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'application/json',
};
api.interceptors.response.use((response) => response, handleErrorResponse);

export default api;
