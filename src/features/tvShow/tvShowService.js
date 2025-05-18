// features/movie/movieService.js
import tmdb from "../../service/tmdb";

// 🔍 Popular Tv
export const getPopularTv = async (page = "1") => {
  const response = await tmdb.get(`tv/popular`, {
    params: { language: "en-US", page: page },
  });
  return response?.data;
};

// get Airing
export const getAiring = async (page = "1") => {
  const response = await tmdb.get(`tv/airing_today`, {
    params: { language: "en-US", page: page },
  });
  return response?.data;
};

// get On Tv
export const getOnTv = async (page = "1") => {
  const response = await tmdb.get(`tv/on_the_air`, {
    params: { language: "en-US", page: page },
  });
  return response?.data;
};

// get Top rated tv
export const getTopRatedTv = async (page = "1") => {
  const response = await tmdb.get(`tv/top_rated`, {
    params: { language: "en-US", page: page },
  });
  return response?.data;
};
