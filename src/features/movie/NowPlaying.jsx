import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AllMovieComponent from "../../components/AllMovieComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  nowPlayingFailure,
  nowPlayingStart,
  nowPlayingSuccess,
} from "./popularSlice";
import { getNowPlaying } from "./moviService";

function NowPlaying() {
  const dispatch = useDispatch();
  const { nowPlayingIsLoading } = useSelector((state) => state.popular);
  const [nowPlayingList, setNowPlayingList] = useState([]);
  const [page, setPage] = useState(1);

  const getNowPlayings = async () => {
    dispatch(nowPlayingStart());
    try {
      const res = await getNowPlaying(page);
      setNowPlayingList((prev) => [...prev, ...res.results]);
      dispatch(nowPlayingSuccess(nowPlayingList));
    } catch (error) {
      console.log(error);
      dispatch(nowPlayingFailure(error?.message));
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    getNowPlayings();
  }, [page]);
  return (
    <section className="mt-[100px]">
      <AllMovieComponent
        items={nowPlayingList}
        isLoading={nowPlayingIsLoading}
        title={"Now Playing "}
        handleLoadMore={handleLoadMore}
      />
      {/* <NavLink to={`${25}`}>MovieDetails Button</NavLink> */}
    </section>
  );
}

export default NowPlaying;
