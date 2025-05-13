import React from "react";
import { NavLink } from "react-router-dom";

function MovieList() {
  return (
    <div>
      MovieList
      <NavLink to={`${25}`}>MovieDetails Button</NavLink>
    </div>
  );
}

export default MovieList;
