import api from './api';

export const registerUser = credentials => api.post('users/signup', credentials);

export const loginUser = credentials => api.post('users/login', credentials);

export const logOutUser = () => api.post('users/logout');

export const getCurrentUser = () => api.get('users/current');

export const setAuthHeader = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  api.defaults.headers.common.Authorization = '';
};
