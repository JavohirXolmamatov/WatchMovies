// features/movie/movieService.js

import tmdb from "../service/tmdb";

// 🔍 Popular filmlar
export const getMoviePeople = async (type, id) => {
  const response = await tmdb.get(`/${type}/${id}/credits`);
  return response?.data;
};

export const getMovieKeyboard = async (type, id) => {
  const response = await tmdb.get(`/${type}/${id}/keywords`);
  return response?.data;
};

export const getMovieSearchCollection = async (query, page) => {
  const response = await tmdb.get(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`
  );
  return response?.data;
};
