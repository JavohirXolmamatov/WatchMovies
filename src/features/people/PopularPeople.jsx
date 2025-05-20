import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  popularPeopleFailure,
  popularPeopleStart,
  popularPeopleSuccess,
} from "./popularPeople.slice";
import {
  getPopularPeople,
  getPopularPeopleSearch,
} from "./popularPeopleService";
import { NavLink } from "react-router-dom";
import Pagination from "../../components/Pagination";
import Loader from "../../components/Loader";

function PopularPeople() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { popularPeopleIsLoading, popularPeopleList } = useSelector(
    (state) => state.people
  );

  const peopleList = async () => {
    dispatch(popularPeopleStart());
    try {
      const res = await getPopularPeople(page);
      dispatch(popularPeopleSuccess(res?.results));
    } catch (error) {
      console.log(error);
      dispatch(popularPeopleFailure(error.message));
    }
  };

  const handleSearchPeople = async (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    console.log(value);

    dispatch(popularPeopleStart());
    try {
      const res = await getPopularPeopleSearch(value);
      dispatch(popularPeopleSuccess(res?.results));
      e.target.reset();
    } catch (error) {
      console.log(error);
      dispatch(popularPeopleFailure(error.message));
    }
  };

  useEffect(() => {
    peopleList();
  }, [page]);
  return (
    <div className="pt-[110px] bg-white h-full w-full">
      <section className="w-8/10 h-full mx-auto">
        <div className="w-full flex items-center mt-10 justify-between">
          <h1 className="text-2xl font-bold">Popular people</h1>
          <div className="relative">
            <form onSubmit={handleSearchPeople}>
              <input
                type="search"
                name="search"
                placeholder="Search popular people...."
                className="py-2 px-4 text-lg rounded-md w-[400px] border border-black/30 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <button
                className="absolute text-lg right-0 bottom-0 top-0 bg-green-500 py-2 px-6 rounded-md"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="w-full h-full flex gap-5 my-10 flex-wrap">
          {popularPeopleIsLoading ? (
            <div className="w-full h-screen flex justify-center items-center ">
              <Loader />
            </div>
          ) : (
            popularPeopleList &&
            popularPeopleList.length > 0 &&
            popularPeopleList.map((item, index) => (
              <NavLink
                to={`/person/${item?.id}-${item.name}`}
                className="w-[290px] h-[440px] shadow-2xl bg-black/40 rounded-md shrink-0 overflow-hidden"
                key={index}
              >
                <img
                  src={`https://media.themoviedb.org/t/p/w220_and_h330_face${item?.profile_path}`}
                  alt={item?.original_title || item?.original_name}
                  className="w-full h-[300px] rounded-md object-cover"
                  loading="lazy"
                />
                <div className="p-2 bg-white h-full overflow-hidden">
                  <h1 className="font-bold text-lg">{item.name}</h1>
                  <div className="h-full">
                    {item?.known_for &&
                      item?.known_for.length > 0 &&
                      item?.known_for.map((item, index) => (
                        <span className="text-black/50 text-sm" key={index}>
                          {item.title} , {""}
                        </span>
                      ))}
                  </div>
                </div>
              </NavLink>
            ))
          )}
        </div>
        <div className="w-full my-6">
          <Pagination page={page} setPage={setPage} totalPages={100} />
        </div>
      </section>
    </div>
  );
}

export default PopularPeople;
