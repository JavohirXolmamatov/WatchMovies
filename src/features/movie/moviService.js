// features/movie/movieService.js
import tmdb from "../../service/tmdb";

// 🔍 Popular filmlar
export const getPopularMovies = async (page = "1") => {
  const response = await tmdb.get(`movie/popular`, {
    params: { language: "en-US", page: page },
  });
  return response?.data;
};
