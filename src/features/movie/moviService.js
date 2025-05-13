// features/movie/movieService.js
import tmdb from "../../service/tmdb";

// 🔍 Popular filmlar
export const fetchPopularMovies = async () => {
  const response = await tmdb.get("/movie/popular");
  return response.data.results;
};

// 🔍 Film tafsilotlari
export const fetchMovieDetails = async (movieId) => {
  const response = await tmdb.get(`/movie/${movieId}`);
  return response.data;
};

// 🔍 O'xshash filmlar
export const fetchSimilarMovies = async (movieId) => {
  const response = await tmdb.get(`/movie/${movieId}/similar`);
  return response.data.results;
};
