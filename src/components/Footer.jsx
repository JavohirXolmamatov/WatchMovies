import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-[#032541] text-white">
      <nav className="flex w-[90%] mx-auto py-10 justify-center gap-10 font-medium">
        <div className="flex flex-col gap-4">
          <img
            src="/ChatGPT Image May 16, 2025, 07_08_47 PM.png"
            alt="The Movie Database (TMDB)"
            className="size-28 rounded-2xl ml-auto"
          />

          <NavLink
            className="bg-white text-blue-600 py-2 px-8 rounded-md"
            href="/u/xolmamatovjavohir390@gmail.com"
          >
            Hi xolmamatovjavohir390@gmail.com!
          </NavLink>
        </div>

        <div>
          <h3 className="font-bold text-2xl mb-2">The Basics</h3>
          <ul className="text-white/70">
            <li>
              <NavLink to={"/about"}>About TMDB</NavLink>
            </li>
            <li>
              <NavLink to={"/about/staying-in-touch"}>Contact Us</NavLink>
            </li>
            <li>
              <NavLink to={"/talk"}>Support Forums</NavLink>
            </li>
            <li>
              <NavLink
                href="/login?to=read_me&amp;redirect_uri=/docs"
                target="_blank"
              >
                API Documentation
              </NavLink>
            </li>
            <li>
              <NavLink
                href="https://status.themoviedb.org/"
                target="_blank"
                rel="noopener"
              >
                System Status
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-2">Get Involved</h3>
          <ul className="text-white/70">
            <li>
              <NavLink to="/bible">
                <span className="glyphicons glyphicons-asterisk"></span>{" "}
                Contribution Bible
              </NavLink>
            </li>
            <li>
              <NavLink to={"/movie/new"}>Add New Movie</NavLink>
            </li>
            <li>
              <NavLink to={"/tv/new"}>Add New TV Show</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-2">Community</h3>
          <ul className="text-white/70">
            <li>
              <NavLink to="/bible/general#674f287930fc85cab62597b4">
                Guidelines
              </NavLink>
            </li>
            <li>
              <NavLink to={"/discuss"}>Discussions</NavLink>
            </li>
            <li>
              <NavLink to={"/leaderboard"}>Leaderboard</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-2">Legal</h3>
          <ul className="text-white/70">
            <li>
              <NavLink to={"/terms-of-use"}>Terms of Use</NavLink>
            </li>
            <li>
              <NavLink to={"/api-terms-of-use"}>API Terms of Use</NavLink>
            </li>
            <li>
              <NavLink to={"/privacy-policy"}>Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to={"/dmca-policy"}>DMCA Policy</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
