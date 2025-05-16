import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";

function Header() {
  return (
    <div className="w-full h-[110px] text-white flex flex-col fixed top-0 z-99">
      {/* navbar */}
      <nav className="w-full h-[70px] bg-[#032541] ">
        <div className="w-[80%] h-full mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8">
            <div>
              <NavLink
                to={"/"}
                className="text-4xl font-bold"
                style={{
                  backgroundImage:
                    "radial-gradient(circle farthest-corner at 50.3% 55.8%, rgba(239,0,0,1) 0.8%, rgba(93,17,17,1) 100.2%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                MovieWatch
              </NavLink>
            </div>
            <div className="relative group inline-block">
              <button className="px-0 py-2 font-medium hover:text-amber-500">
                Movies
              </button>

              {/* Dropdown menyu */}
              <div className="pointer-events-none overflow-hidden absolute left-0 m-0 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 z-50">
                <NavLink
                  to={"/movie"}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Popular
                </NavLink>
                <NavLink
                  to={"/movie/now-playing"}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Now Playing
                </NavLink>
                <NavLink className="block px-4 py-2 hover:bg-gray-100">
                  upcoming
                </NavLink>
                <NavLink className="block px-4 py-2 hover:bg-gray-100">
                  Top Rated
                </NavLink>
              </div>
            </div>

            <div className="relative group inline-block">
              <button className="px-0 py-2 font-medium hover:text-amber-500">
                Teleko'rsatuvlar
              </button>

              {/* Dropdown menyu */}
              <div className="pointer-events-none absolute left-0 m-0 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 z-50">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Frontend
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Backend
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Design
                </a>
              </div>
            </div>

            <div className="relative group inline-block">
              <button className="px-0 py-2 font-medium hover:text-amber-500">
                Kishilar
              </button>

              {/* Dropdown menyu */}
              <div className="pointer-events-none absolute left-0 m-0 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 z-50">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Frontend
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Backend
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Design
                </a>
              </div>
            </div>

            <div className="relative group inline-block">
              <button className="px-0 py-2 font-medium hover:text-amber-500">
                Yana
              </button>

              {/* Dropdown menyu */}
              <div className="pointer-events-none absolute left-0 m-0 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 z-50">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Frontend
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Backend
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Design
                </a>
              </div>
            </div>
          </div>
          <div>2</div>
        </div>
      </nav>

      {/* search */}
      <div className="w-full h-[40px] text-black bg-white  shadow-md">
        <div className="w-[80%] mx-auto h-full flex items-center">
          <IoMdSearch className="size-6" />
          <input
            type="search"
            placeholder="Film, telekursatuv, kishi va hakazo. qidirish..."
            className="py-2 w-full text-lg px-4 outline-none focus:outline-none border-none"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
