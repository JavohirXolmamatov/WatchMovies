import React, { useEffect, useState } from "react";
import { fetchPopularMovies } from "./dashboardService";
import { NavLink } from "react-router-dom";
import { kinoBanner2 } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import {
  trendingFailure,
  trendingStart,
  trendingSuccess,
} from "./dashboardSlice";
import Loader from "../../components/Loader";

function Dashboard() {
  const [active, setActive] = useState("day");
  const dispatch = useDispatch();
  const { isLoading, trending } = useSelector((state) => state.trending);

  const getTrending = async () => {
    dispatch(trendingStart());
    try {
      const res = await fetchPopularMovies(active);
      dispatch(trendingSuccess(res?.results));
    } catch (error) {
      console.log(error);
      dispatch(trendingFailure());
    }
  };

  useEffect(() => {
    getTrending();
  }, [active]);

  return (
    <div className="w-full mt-[100px]">
      <section className="relative w-full h-[350px] bg-[#032541]">
        <img
          src={kinoBanner2}
          alt={kinoBanner2}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 h-full w-full  text-white">
          <div className="w-[80%] h-full mx-auto py-10 flex flex-col justify-center items-start gap-2">
            <h1 className="text-5xl font-bold">Hush kelibsiz</h1>
            <p className="text-2xl font-bold">
              Millionlab filmlar, telekoʻrsatuvlar va kishilar. Hoziroq kash
              eting.
            </p>
            <label className="w-full flex relative mt-6">
              <input
                type="search"
                className="bg-white py-3 w-full rounded-3xl relative text-black px-6 text-lg outline-none focus:outline-none border-none"
                placeholder="Film, Teleko'rsatuv, kishi va hk. qidirish..."
              />
              <button
                type="button"
                className="py-3 bg-green-400 px-8 rounded-3xl absolute right-0 text-lg "
              >
                Search
              </button>
            </label>
          </div>
        </div>
      </section>

      {/* Trendda */}
      <section className="w-8/10 mx-auto py-10">
        <div className="flex items-center justify-start gap-4">
          <h1 className="text-2xl font-medium">Trendda</h1>
          <div className="border inline-block rounded-2xl font-medium">
            <button
              onClick={() => setActive("day")}
              className={`py-1 px-4 rounded-2xl transition-all duration-300 ${
                active === "day" ? "bg-amber-300" : ""
              }`}
            >
              Bugun
            </button>
            <button
              onClick={() => setActive("week")}
              className={`py-1 px-4 rounded-2xl transition-all duration-300 ${
                active === "week" ? "bg-amber-300" : ""
              }`}
            >
              Bu hafta
            </button>
          </div>
        </div>
        <div className="overflow-x-auto h-[440px]">
          <div className="flex w-[240%] gap-5 p-8">
            {isLoading ? (
              <div className="w-[43%] h-full flex justify-center items-center">
                <Loader />
              </div>
            ) : (
              trending.map((item, index) => (
                <div
                  key={index}
                  className="w-[200px] shrink-0 relative hover:scale-105 transition-all duration-200 shadow-xl rounded-xl overflow-hidden"
                >
                  <NavLink to={`/movie/${item?.id}`}>
                    <img
                      src={`https://media.themoviedb.org/t/p/w220_and_h330_face${item?.poster_path}`}
                      alt={item?.original_title}
                      className="w-full h-[250px] rounded-md object-cover"
                    />
                  </NavLink>
                  <div
                    className="absolute bottom-22 left-3 size-10 rounded-full flex items-center justify-center text-xs font-bold text-black"
                    style={{
                      background: `conic-gradient(#22c55e ${
                        item.vote_average * 10
                      }%, #e5e7eb ${item.vote_average * 10}%)`,
                    }}
                  >
                    <div className="bg-white rounded-full size-8 flex items-center justify-center">
                      {Math.round(item.vote_average * 10)}%
                    </div>
                  </div>

                  <div className="p-4">
                    <NavLink to={`/movie/${item?.id}`}>
                      <h1 className="font-bold hover:text-blue-500 transition-all duration-300">
                        {item.original_title}
                      </h1>
                    </NavLink>
                    <span>{item?.release_date}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
