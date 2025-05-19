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
