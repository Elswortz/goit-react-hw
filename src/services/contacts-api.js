import api from './api';
// import axios from 'axios';
// const BASE_URL = 'https://6890ddef944bf437b5979611.mockapi.io/api/v1';

// export const getContacts = async () => {
//   const response = await axios.get(`${BASE_URL}/contacts`);
//   return response.data;
// };

// export const addContact = async contact => {
//   const response = await axios.post(`${BASE_URL}/contacts`, contact);
//   return response.data;
// };

// export const deleteContact = async id => {
//   const response = await axios.delete(`${BASE_URL}/contacts/${id}`);
//   return response.data;
// };

export const getContacts = () => api.get('contacts');

export const addContact = contact => api.post('contacts', contact);

export const deleteContact = id => api.delete(`contacts/${id}`);
