import tmdb from "../../service/tmdb";

export const getPopularPeople = async (page = 1) => {
  const res = await tmdb.get(`/person/popular?language=en-US&page=${page}`);
  return res?.data;
};

export const getPopularPeopleSearch = async (person) => {
  const res = await tmdb.get(
    `/search/person?query=${person}&include_adult=false&language=en-US&page=1`
  );
  return res?.data;
};
