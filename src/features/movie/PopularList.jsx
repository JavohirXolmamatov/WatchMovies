import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AllMovieComponent from "../../components/AllMovieComponent";
import { getPopularMovies } from "./moviService";
import { useDispatch, useSelector } from "react-redux";
import { popularFailure, popularStart, popularSuccess } from "./popularSlice";

function PopularList() {
  const dispatch = useDispatch();
  const { popular, isLoading } = useSelector((state) => state.popular);

  const getMovie = async () => {
    dispatch(popularStart());
    try {
      const res = await getPopularMovies();
      dispatch(popularSuccess(res.results));
    } catch (error) {
      console.log(error);
      dispatch(popularFailure(error?.message));
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <section className="mt-[100px]">
      <AllMovieComponent
        items={popular}
        isLoading={isLoading}
        title={"Popular Movies"}
      />
      {/* <NavLink to={`${25}`}>MovieDetails Button</NavLink> */}
    </section>
  );
}

export default PopularList;
