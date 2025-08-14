import axios from 'axios';

const api = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

export default api;
