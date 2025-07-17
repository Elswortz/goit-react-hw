import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTQ5ZTBmNTc4YWVkZDcwZTdhNDNjYzA1OGQ2ZGJkNSIsIm5iZiI6MTc1Mjc2NTYxOC4xNjIsInN1YiI6IjY4NzkxNGIyZjY1ZjI1ODQwNmFmMGUwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SeXG2pYJvQiFX1L9gVtDyl9kF7TywFLJi7t9dz66Gqg',
  },
});

export const getTendingMovies = async () => {
  const respone = await api.get(`/trending/movie/day?language=en-US`);
  return respone.data;
};

export const getMovies = async searchText => {
  const respone = await api.get(
    `/search/movie?query=${searchText}&include_adult=false&language=en-US`
  );
  return respone.data;
};

export const getMovieById = async movieId => {
  const respone = await api.get(`/movie/${movieId}?language=en-US`);
  return respone.data;
};

export const getMovieCredits = async movieId => {
  const respone = await api.get(`/movie/${movieId}/credits?language=en-US`);
  return respone.data;
};

export const getMovieReviews = async movieId => {
  const respone = await api.get(`/movie/${movieId}/reviews?language=en-US`);
  return respone.data;
};
