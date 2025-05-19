import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Loader from "./Loader";

function AllMovieComponent({ items, isLoading, title, handleLoadMore }) {
  return (
    <div className="w-[80%] h-full mx-auto py-10">
      <h1 className="text-2xl font-medium">{title}</h1>
      <div className="w-full h-full flex gap-8 justify-between py-5 relative">
        <aside className="w-2/12 h-screen rounded-md flex flex-col gap-6 sticky top-50">
          <div className="shadow-md border border-black/10 bg-white text-lg font-medium p-4 rounded-md flex items-center justify-between">
            <h1>Sort</h1>
            <span>
              <FaAngleRight />
            </span>
          </div>

          <div className="shadow-md border border-black/10 bg-white text-lg font-medium p-4 rounded-md flex items-center justify-between">
            <h1>Filters</h1>
            <span>
              <FaAngleRight />
            </span>
          </div>
        </aside>
        <main className="w-10/12 h-full  rounded-md shadow-md">
          <div className="flex flex-wrap gap-y-8 gap-x-2 justify-between">
            {isLoading ? (
              <div className="w-full h-full flex justify-center items-center">
                <Loader />
              </div>
            ) : (
              items.map((item, index) => (
                <div
                  key={index}
                  className="w-[230px] h-[354px] bg-amber-50 shrink-0 relative hover:scale-105 transition-all duration-200 shadow-xl rounded-xl overflow-hidden"
                >
                  <NavLink
                    to={`/${item.original_title ? "movie" : "tv"}/${item?.id}`}
                  >
                    <img
                      src={`https://media.themoviedb.org/t/p/w220_and_h330_face${
                        item?.poster_path || item?.backdrop_path
                      }`}
                      alt={item?.original_title || item?.original_name}
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
                        {`${item?.original_title || item?.original_name}`}
                      </h1>
                    </NavLink>
                    <span>{item?.release_date || item?.first_air_date}</span>
                  </div>
                </div>
              ))
            )}
            <div className="w-full">
              <button
                className="py-2 bg-[#01B4E4] w-full text-xl font-bold text-white rounded-md"
                onClick={handleLoadMore}
                // disabled={loading}
              >
                Load More
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AllMovieComponent;
