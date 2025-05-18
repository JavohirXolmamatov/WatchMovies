import { useEffect, useState } from "react";
import AllMovieComponent from "../../components/AllMovieComponent";
import { useDispatch, useSelector } from "react-redux";
import { getAiring } from "./tvShowService";
import {
  airingTodayFailure,
  airingTodayStart,
  airingTodaySuccess,
} from "./tvShowSlice";

function AiringToday() {
  const dispatch = useDispatch();
  const { airingIsLoading } = useSelector((state) => state.tvShow);

  const [airingToday, setAiringToday] = useState([]);
  const [page, setPage] = useState(1);

  const getAiringTodayShow = async () => {
    dispatch(airingTodayStart());
    try {
      const res = await getAiring(page);
      setAiringToday((prev) => [...prev, ...res.results]);
      dispatch(airingTodaySuccess(airingToday));
    } catch (error) {
      console.log(error);
      dispatch(airingTodayFailure(error?.message));
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    getAiringTodayShow();
  }, [page]);

  return (
    <section className="mt-[100px]">
      <AllMovieComponent
        items={airingToday}
        isLoading={airingIsLoading}
        title={"Popular Airing Today"}
        handleLoadMore={handleLoadMore}
      />
      {/* <NavLink to={`${25}`}>MovieDetails Button</NavLink> */}
    </section>
  );
}

export default AiringToday;
