import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AllMovieComponent from "../../components/AllMovieComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  upComingFailure,
  upComingStart,
  upComingSuccess,
} from "./popularSlice";
import { getTopRated } from "./moviService";

function TopRated() {
  const dispatch = useDispatch();
  const { topRatesIsLoading } = useSelector((state) => state.popular);
  const [topRatedList, setupTopRatedList] = useState([]);
  const [page, setPage] = useState(1);

  const getTopRates = async () => {
    dispatch(upComingStart());
    try {
      const res = await getTopRated(page);
      setupTopRatedList((prev) => [...prev, ...res.results]);
      dispatch(upComingSuccess(topRatedList));
    } catch (error) {
      console.log(error);
      dispatch(upComingFailure(error?.message));
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    getTopRates();
  }, [page]);

  return (
    <section className="mt-[100px]">
      <AllMovieComponent
        items={topRatedList}
        isLoading={topRatesIsLoading}
        title={"Top Rated Movies "}
        handleLoadMore={handleLoadMore}
      />
      {/* <NavLink to={`${25}`}>MovieDetails Button</NavLink> */}
    </section>
  );
}

export default TopRated;
