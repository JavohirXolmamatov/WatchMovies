import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieSearchCollection } from "./componentsService";
import { useDispatch, useSelector } from "react-redux";
import {
  searchMovieFailure,
  searchMovieStart,
  searchMovieSuccess,
} from "./conponentsSlice";
import AllMovieComponent from "./AllMovieComponent";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Search() {
  const query = useQuery().get("q");
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const { searchMovieIsLoading, searchMovie } = useSelector(
    (state) => state.components
  );

  const handleSearchElement = async () => {
    dispatch(searchMovieStart());
    try {
      if (query) {
        const res = await getMovieSearchCollection(query, page);
        dispatch(searchMovieSuccess(res?.results));
      }
    } catch (error) {
      console.log(error);
      dispatch(searchMovieFailure(error));
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    handleSearchElement();
  }, [query, page]);

  return (
    <section className="mt-[100px]">
      <AllMovieComponent
        items={searchMovie}
        isLoading={searchMovieIsLoading}
        title={"Search Movies"}
        handleLoadMore={handleLoadMore}
      />
      {/* <NavLink to={`${25}`}>MovieDetails Button</NavLink> */}
    </section>
  );
}

export default Search;
