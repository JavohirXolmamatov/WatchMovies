import { useEffect, useState } from "react";
import AllMovieComponent from "../../components/AllMovieComponent";
import { useDispatch, useSelector } from "react-redux";
import { getOnTv } from "./tvShowService";
import { onTvFailure, onTvStart, onTvSuccess } from "./tvShowSlice";

function OnTv() {
  const dispatch = useDispatch();
  const { onTvIsLoading } = useSelector((state) => state.tvShow);

  const [onTvList, setOnTvList] = useState([]);
  const [page, setPage] = useState(1);

  const onTvShow = async () => {
    dispatch(onTvStart());
    try {
      const res = await getOnTv(page);
      setOnTvList((prev) => [...prev, ...res.results]);
      dispatch(onTvSuccess(onTvList));
    } catch (error) {
      console.log(error);
      dispatch(onTvFailure(error?.message));
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    onTvShow();
  }, [page]);

  return (
    <section className="mt-[100px]">
      <AllMovieComponent
        items={onTvList}
        isLoading={onTvIsLoading}
        title={"Popular Airing Today"}
        handleLoadMore={handleLoadMore}
      />
      {/* <NavLink to={`${25}`}>MovieDetails Button</NavLink> */}
    </section>
  );
}

export default OnTv;
