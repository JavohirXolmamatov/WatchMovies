import React, { useEffect, useState } from "react";
import {
  getDiscoverMovie,
  getPopularMovies,
  getPopularTv,
} from "./dashboardService";
import { NavLink } from "react-router-dom";
import { kinoBanner2 } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import {
  discoverFailure,
  discoverStart,
  discoverSuccess,
  trendingFailure,
  trendingStart,
  trendingSuccess,
  tvFailure,
  tvStart,
  tvSuccess,
} from "./dashboardSlice";
import Loader from "../../components/Loader";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

function Dashboard() {
  const [activeTrending, setActiveTrending] = useState("day");
  const [activeTv, setActiveTv] = useState("day");
  const dispatch = useDispatch();
  const { trendingIsLoading, trending } = useSelector(
    (state) => state.trending
  );
  const { tvIsLoading, tv } = useSelector((state) => state.trending);
  const { discoverIsLoading, discover } = useSelector(
    (state) => state.trending
  );

  const [page, setPage] = useState(5);

  const randomPage = () => {
    const ranPage = Math.floor(Math.random() * 100) + 1; // 1 dan 100 gacha butun son
    setPage(ranPage);
  };

  // Trending
  const getTrending = async () => {
    dispatch(trendingStart());
    try {
      const res = await getPopularMovies(activeTrending, page);
      dispatch(trendingSuccess(res?.results));
    } catch (error) {
      console.log(error);
      dispatch(trendingFailure(error?.message));
    }
  };

  //Tv
  const getTv = async () => {
    dispatch(tvStart());
    try {
      const res = await getPopularTv(activeTv, page);
      dispatch(tvSuccess(res?.results));
    } catch (error) {
      console.log(error);
      dispatch(tvFailure(error?.message));
    }
  };

  //Discover movie
  const getDiscoverMovies = async () => {
    dispatch(discoverStart());
    try {
      const res = await getDiscoverMovie(page);
      dispatch(discoverSuccess(res?.results));
    } catch (error) {
      console.log(error);
      dispatch(discoverFailure(error?.message));
    }
  };

  useEffect(() => {
    getTrending(); // faqat activeTrending o‘zgarganda
  }, [activeTrending, page]);

  useEffect(() => {
    getTv(); // faqat activeTv o‘zgarganda
  }, [activeTv, page]);

  useEffect(() => {
    getDiscoverMovies(); // faqat Discover o‘zgarganda
  }, [page]);

  useEffect(() => {
    randomPage();
  }, []);

  return (
    <div className="w-full mt-[100px]">
      {/* top header */}
      <section className="relative w-full h-[350px] bg-[#032541]">
        <img
          src={kinoBanner2}
          alt="banner"
          className="w-full h-full object-cover object-center"
          loading="eager"
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

      {/* Trending */}
      <section className="w-8/10 mx-auto py-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-4">
            <h1 className="text-2xl font-medium">Trendda</h1>
            <div className="border inline-block rounded-2xl font-medium">
              <button
                onClick={() => setActiveTrending("day")}
                className={`py-1 px-4 rounded-2xl transition-all duration-300 ${
                  activeTrending === "day" ? "bg-amber-300" : ""
                }`}
              >
                Bugun
              </button>
              <button
                onClick={() => setActiveTrending("week")}
                className={`py-1 px-4 rounded-2xl transition-all duration-300 ${
                  activeTrending === "week" ? "bg-amber-300" : ""
                }`}
              >
                Bu hafta
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto h-[440px]">
          <div className="flex w-[240%] gap-5 p-8">
            {trendingIsLoading ? (
              <div className="w-[43%] h-full flex justify-center items-center">
                <Loader />
              </div>
            ) : (
              trending.map((item, index) => (
                <div
                  key={index}
                  className="w-[230px] h-[360px] shrink-0 relative hover:scale-105 transition-all duration-200 shadow-xl rounded-xl overflow-hidden"
                >
                  <NavLink to={`/movie/${item?.id}`}>
                    <img
                      src={`https://media.themoviedb.org/t/p/w220_and_h330_face${item?.poster_path}`}
                      alt={item?.original_title}
                      className="w-full h-[250px] rounded-md object-cover"
                      loading="lazy"
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

      {/* Swiper */}
      <section className="w-8/10 mx-auto py-10 overflow-hidden rounded-2xl">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={4} // ✅ Ekranda 3 ta slayd ko‘rinadi
          loop={true}
          autoplay={{
            delay: 2500, // ✅ 2.5 soniyada bir
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]} // ✅ Autoplay qo‘shildi
          className="mySwiper"
        >
          {discoverIsLoading ? (
            <div className="w-[43%] h-full flex justify-center items-center">
              <Loader />
            </div>
          ) : (
            discover.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  src={`https://media.themoviedb.org/t/p/w220_and_h330_face${item?.poster_path}`}
                  alt={item?.original_title}
                  className="object-cover"
                  loading="lazy"
                />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </section>

      {/* Tv */}
      <section className="w-8/10 mx-auto py-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-4">
            <h1 className="text-2xl font-medium">Tv Show</h1>
            <div className="border inline-block rounded-2xl font-medium">
              <button
                onClick={() => setActiveTv("day")}
                className={`py-1 px-4 rounded-2xl transition-all duration-300 ${
                  activeTv === "day" ? "bg-amber-300" : ""
                }`}
              >
                Bugun
              </button>
              <button
                onClick={() => setActiveTv("week")}
                className={`py-1 px-4 rounded-2xl transition-all duration-300 ${
                  activeTv === "week" ? "bg-amber-300" : ""
                }`}
              >
                Bu hafta
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto h-[440px]">
          <div className="flex w-[240%] gap-5 p-8">
            {tvIsLoading ? (
              <div className="w-[43%] h-full flex justify-center items-center">
                <Loader />
              </div>
            ) : (
              tv.map((item, index) => (
                <div
                  key={index}
                  className="w-[230px] h-[360px] shrink-0 relative hover:scale-105 transition-all duration-200 shadow-xl rounded-xl overflow-hidden"
                >
                  <NavLink
                    to={`/${item.first_air_date ? "tv" : "movie"}/${item?.id}`}
                  >
                    <img
                      src={`https://media.themoviedb.org/t/p/w220_and_h330_face${item?.poster_path}`}
                      alt={item?.original_name}
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
                    <NavLink
                      to={`/${item?.first_air_date ? "tv" : "movie"}/${
                        item?.id
                      }`}
                    >
                      <h1 className="font-bold hover:text-blue-500 transition-all duration-300">
                        {item?.name}
                      </h1>
                    </NavLink>
                    <span>{item?.first_air_date}</span>
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
