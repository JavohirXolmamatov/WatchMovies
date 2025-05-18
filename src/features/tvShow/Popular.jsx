import { useEffect, useState } from "react";
import AllMovieComponent from "../../components/AllMovieComponent";
import { useDispatch, useSelector } from "react-redux";
import { getPopularTv } from "./tvShowService";
import { popularTvStart, popularTvSuccess } from "./tvShowSlice";

function Popular() {
  const dispatch = useDispatch();
  const { popularIsLoading } = useSelector((state) => state.tvShow);

  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);

  const getPopularTvShow = async () => {
    dispatch(popularTvStart());
    try {
      const res = await getPopularTv(page);
      setPopular((prev) => [...prev, ...res.results]);
      dispatch(popularTvSuccess(popular));
    } catch (error) {
      console.log(error);
      dispatch(popularTvFailure(error?.message));
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    getPopularTvShow();
  }, [page]);

  return (
    <section className="mt-[100px]">
      a
      <AllMovieComponent
        items={popular}
        isLoading={popularIsLoading}
        title={"Popular Tv Shows"}
        handleLoadMore={handleLoadMore}
      />
      {/* <NavLink to={`${25}`}>MovieDetails Button</NavLink> */}
    </section>
  );
}

export default Popular;
