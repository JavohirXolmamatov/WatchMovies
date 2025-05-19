import { NavLink, useParams } from "react-router-dom";
import tmdb from "../service/tmdb";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import TrailerModal from "./TrailerModal";
import { getMovieKeyboard, getMoviePeople } from "./componentsService";
import { useDispatch, useSelector } from "react-redux";
import { peopleFailure, peopleStart, peopleSuccess } from "./conponentsSlice";

function MovieDetails() {
  const dispatch = useDispatch();
  const { id, type } = useParams();
  const [data, setData] = useState();
  const [keyword, setKeywords] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { peopleIsLoading, people } = useSelector((state) => state.components);

  const getIdElement = async () => {
    setIsLoading(true);
    try {
      let res = await tmdb.get(`/${type}/${id}`);
      setIsLoading(false);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getIdElementPeople = async () => {
    dispatch(peopleStart());
    try {
      const res = await getMoviePeople(type, id);
      dispatch(peopleSuccess(res));
    } catch (error) {
      console.log(error);
      dispatch(peopleFailure());
    }
  };

  const getIdKeywords = async () => {
    try {
      const res = await getMovieKeyboard(type, id);
      setKeywords(res?.keywords || res.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getIdElement();
    getIdElementPeople();
    getIdKeywords();
  }, [id]);

  return (
    <section className="pt-[110px]">
      {isLoading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <section
          className="w-full h-[500px] bg-[#1F1F1F] bg-no-repeat bg-center bg-cover relative"
          style={{
            backgroundImage: `url(https://media.themoviedb.org/t/p/w220_and_h330_face${data?.backdrop_path})`,
          }}
        >
          {/* Overlay - fon ustiga qoraytiruvchi qatlam */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#1F1F1F]/70 z-10"></div>

          {/* Kontent - rasm va matn */}
          <div className="w-[80%] h-full mx-auto flex items-center py-10 gap-8 relative z-20">
            <img
              src={`https://media.themoviedb.org/t/p/w220_and_h330_face${data?.poster_path}`}
              alt={data?.original_title}
              className="w-2/12 h-full rounded-md object-cover shadow-2xl"
              loading="lazy"
            />
            <div className="w-10/12 h-full text-white">
              <div className="flex items-center gap-4">
                <h1 className="text-4xl font-bold">
                  {data?.title || data?.original_name}
                </h1>
                <span className="font-medium text-2xl text-white/70">
                  ( {data?.release_date || data?.first_air_date} )
                </span>
              </div>

              <div className="flex items-center gap-4 text-white font-medium">
                <div className="flex gap-2">
                  <span className="text-red-300"> Country:</span>
                  {data?.origin_country &&
                    data?.origin_country.map((item, index) => (
                      <span key={index}>{item}</span>
                    ))}
                </div>
                <span>|</span>
                <div className="flex gap-2">
                  <span className="text-red-300">Genres:</span>
                  {data?.genres &&
                    data?.genres.map((item, index) => (
                      <span key={index}>
                        <NavLink>{item?.name}</NavLink>
                      </span>
                    ))}
                </div>
              </div>

              {/* foiz */}
              <div className="py-6 flex justify-start items-center gap-4">
                <div className="flex gap-2 items-center">
                  <div
                    className="bottom-22 left-3 size-18 rounded-full flex items-center justify-center text-xs font-bold text-black"
                    style={{
                      background: `conic-gradient(#22c55e ${
                        data?.vote_average * 10
                      }%, #e5e7eb ${data?.vote_average * 10}%)`,
                    }}
                  >
                    <div className="bg-[#1F1F1F] text-white rounded-full size-14 text-lg flex items-center justify-center">
                      {Math.round(data?.vote_average * 10)}%
                    </div>
                  </div>
                  <div className="flex flex-col font-medium">
                    <span>User</span>
                    <span>Score</span>
                  </div>
                </div>
              </div>

              {/* Iconlar va trailer */}
              <div>
                <TrailerModal id={data?.id} type={type} />
              </div>

              {/* Nimadir yozuvlar */}
              <div className="my-4 gap-2 font-medium flex flex-col">
                <span className="text-white/70 text-lg">{data?.tagline}</span>
                <span className="text-2xl ">Overview</span>
                <p className="text-white/90">{data?.overview}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* People list */}
      <section className="w-full">
        <div className="w-4/5 mx-auto flex py-10 bg-white">
          {/* Left */}
          <div className="w-9/12">
            <h1 className="text-xl font-medium mb-4">Top Billed Cast</h1>
            <div className="w-full flex overflow-scroll gap-4 py-6">
              {peopleIsLoading ? (
                <div className="w-full flex items-center justify-center">
                  <Loader />
                </div>
              ) : (
                people?.cast?.length > 0 &&
                people.cast.map((item, index) => (
                  <figure
                    key={index}
                    className="w-[150px] flex-shrink-0 shadow-2xl rounded-md"
                  >
                    <img
                      src={`https://media.themoviedb.org/t/p/w220_and_h330_face${item?.profile_path}`}
                      alt={item?.original_title || item?.original_name}
                      className="w-[150px] h-[150px] rounded-md object-cover"
                      loading="lazy"
                    />
                    <div className="p-2">
                      <h1 className=" font-medium mt-2">{item?.name}</h1>
                      <span>{item?.character}</span>
                    </div>
                  </figure>
                ))
              )}
            </div>
            <div className="my-6">
              <NavLink to={"/"} className="text-lg font-medium">
                Full Cast & Crew
              </NavLink>
            </div>
          </div>

          {/* right */}
          <div className="w-3/12 px-8 flex flex-col gap-3">
            <div>
              <h1 className="font-medium">Status</h1>
              <span className="">{data?.status}</span>
            </div>

            <div>
              <h1 className="font-medium">Original Languages</h1>
              <span className="">
                {data?.original_language == "en"
                  ? "English"
                  : data?.original_language}
              </span>
            </div>

            <div>
              <h1 className="font-medium">Budget</h1>
              <span className="">${data?.budget ?? "Anonymous"}</span>
            </div>

            <div>
              <h1 className="font-medium">Revenue</h1>
              <span className="">${data?.revenue ?? "Anonymous"}</span>
            </div>

            {keyword && keyword.length > 0 && (
              <h1 className="font-medium">Keyword</h1>
            )}
            <div className="flex gap-3 flex-wrap">
              {keyword &&
                keyword.map((item, index) => (
                  <span
                    className="bg-black/10 px-3 rounded-md text-sm"
                    key={index}
                  >
                    {item?.name}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default MovieDetails;
