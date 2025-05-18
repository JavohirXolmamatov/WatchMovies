import { useEffect, useState } from "react";
import AllMovieComponent from "../../components/AllMovieComponent";
import { useDispatch, useSelector } from "react-redux";
import { getTopRatedTv } from "./tvShowService";
import {
  topRatedTvFailure,
  topRatedTvStart,
  topRatedTvSuccess,
} from "./tvShowSlice";

function TopRatedTv() {
  const dispatch = useDispatch();
  const { topRatedTvIsLoading } = useSelector((state) => state.tvShow);

  const [airingToday, setAiringToday] = useState([]);
  const [page, setPage] = useState(1);

  const topRatedTvShow = async () => {
    dispatch(topRatedTvStart());
    try {
      const res = await getTopRatedTv(page);
      setAiringToday((prev) => [...prev, ...res.results]);
      dispatch(topRatedTvSuccess(airingToday));
    } catch (error) {
      console.log(error);
      dispatch(topRatedTvFailure(error?.message));
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    topRatedTvShow();
  }, [page]);

  return (
    <section className="mt-[100px]">
      <AllMovieComponent
        items={airingToday}
        isLoading={topRatedTvIsLoading}
        title={"Popular Airing Today"}
        handleLoadMore={handleLoadMore}
      />
      {/* <NavLink to={`${25}`}>MovieDetails Button</NavLink> */}
    </section>
  );
}

export default TopRatedTv;
