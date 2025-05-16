// features/movie/movieService.js
import tmdb from "../../service/tmdb";

// 🔍 Popular filmlar
export const getPopularMovies = async (active = "day", page = "3") => {
  const response = await tmdb.get(`trending/movie/${active}`, {
    params: {
      page: page,
    },
  });
  return response?.data;
};

export const getPopularTv = async (active = "day", page = "3") => {
  const response = await tmdb.get(`trending/tv/${active}`, {
    params: {
      page: page,
    },
  });
  return response?.data;
};
