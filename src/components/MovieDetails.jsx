import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import tmdb from "../service/tmdb";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import TrailerModal from "./TrailerModal";

function MovieDetails() {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getIdElement = async () => {
    setIsLoading(true);
    try {
      let res = await tmdb.get(`/movie/${id}`);
      setIsLoading(false);
      setData(res.data);
    } catch (error) {
      // Agar movie topilmasa, tv sifatida sinab ko‘ramiz
      if (error.response?.status === 404) {
        try {
          const res = await tmdb.get(`/tv/${id}`);
          setData(res.data);
          setIsLoading(false);
        } catch (err) {
          console.log("TV ham topilmadi:", err);
          setIsLoading(false);
        }
      } else {
        console.log("Movie xatosi:", error);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    getIdElement();
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
                <h1 className="text-4xl font-bold">{data?.title}</h1>
                <span className="font-medium text-2xl text-white/70">
                  ( {data?.release_date} )
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
                <TrailerModal id={data?.id} />
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
    </section>
  );
}

export default MovieDetails;
