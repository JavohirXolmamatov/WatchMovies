import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AllMovieComponent from "../../components/AllMovieComponent";
import { getPopularMovies } from "./moviService";
import { useDispatch, useSelector } from "react-redux";
import { popularFailure, popularStart, popularSuccess } from "./popularSlice";

function PopularList() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.popular);
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);

  const getMovie = async () => {
    dispatch(popularStart());
    try {
      const res = await getPopularMovies(page);
      setPopular((prev) => [...prev, ...res.results]);
      dispatch(popularSuccess(popular));
    } catch (error) {
      console.log(error);
      dispatch(popularFailure(error?.message));
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    getMovie();
  }, [page]);

  return (
    <section className="mt-[100px]">
      <AllMovieComponent
        items={popular}
        isLoading={isLoading}
        title={"Popular Movies"}
        handleLoadMore={handleLoadMore}
      />
      {/* <NavLink to={`${25}`}>MovieDetails Button</NavLink> */}
    </section>
  );
}

export default PopularList;
