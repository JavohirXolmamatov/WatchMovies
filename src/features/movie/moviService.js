// features/movie/movieService.js
import tmdb from "../../service/tmdb";

// 🔍 Popular filmlar
export const getPopularMovies = async (page = "1") => {
  const response = await tmdb.get(`movie/popular`, {
    params: { language: "en-US", page: page },
  });
  return response?.data;
};

// get Now Playing
export const getNowPlaying = async (page = "1") => {
  const response = await tmdb.get(`movie/now_playing`, {
    params: { language: "en-US", page: page },
  });
  return response?.data;
};

// get Upcoming
export const getUpComing = async (page = "1") => {
  const response = await tmdb.get(`movie/upcoming`, {
    params: { language: "en-US", page: page },
  });
  return response?.data;
};

// get Upcoming
export const getTopRated = async (page = "1") => {
  const response = await tmdb.get(`movie/top_rated`, {
    params: { language: "en-US", page: page },
  });
  return response?.data;
};
