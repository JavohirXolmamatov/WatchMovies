// features/movie/movieService.js
import tmdb from "../../service/tmdb";

// 🔍 Popular filmlar
export const fetchPopularMovies = async (active) => {
  const response = await tmdb.get(`trending/movie/${active}`);
  return response?.data;
};
