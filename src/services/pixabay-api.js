import axios from 'axios';

const API_KEY = '50700710-80ba1f31df9b10c9037cb401f';
axios.defaults.baseURL = 'https://pixabay.com/api';

export const getImages = async value => {
  const respone = await axios.get(
    `/?key=${API_KEY}&q=${value}&image_type=photo`
  );
  return respone.data;
};
