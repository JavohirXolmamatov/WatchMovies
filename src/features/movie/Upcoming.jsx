import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AllMovieComponent from "../../components/AllMovieComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  upComingFailure,
  upComingStart,
  upComingSuccess,
} from "./popularSlice";
import { getUpComing } from "./moviService";

function Upcoming() {
  const dispatch = useDispatch();
  const { upComingIsLoading } = useSelector((state) => state.popular);
  const [upComingList, setupComingList] = useState([]);
  const [page, setPage] = useState(1);

  const getUpcoming = async () => {
    dispatch(upComingStart());
    try {
      const res = await getUpComing(page);
      setupComingList((prev) => [...prev, ...res.results]);
      dispatch(upComingSuccess(upComingList));
    } catch (error) {
      console.log(error);
      dispatch(upComingFailure(error?.message));
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    getUpcoming();
  }, [page]);
  return (
    <section className="mt-[100px]">
      <AllMovieComponent
        items={upComingList}
        isLoading={upComingIsLoading}
        title={"Upcoming Movies "}
        handleLoadMore={handleLoadMore}
      />
      {/* <NavLink to={`${25}`}>MovieDetails Button</NavLink> */}
    </section>
  );
}

export default Upcoming;
