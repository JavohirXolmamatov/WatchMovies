import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ErrorPages from "./components/ErrorPages";
import MovieDetails from "./components/MovieDetails";
import { Dashboard } from "./features";
import PopularList from "./features/movie/PopularList";
import NowPlaying from "./features/movie/NowPlaying";
import Upcoming from "./features/movie/Upcoming";
import TopRated from "./features/movie/TopRated";
import Popular from "./features/tvShow/Popular";
import AiringToday from "./features/tvShow/AiringToday";
import OnTv from "./features/tvShow/OnTv";
import TopRatedTv from "./features/tvShow/TopRatedTv";
import Search from "./components/Search";
import PopularPeople from "./features/people/PopularPeople";
import PeopleDetail from "./features/people/PeopleDetail";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      Component: MainLayout,
      errorElement: <ErrorPages />,
      children: [
        {
          index: true,
          Component: Dashboard,
        },
        {
          path: "movie",
          Component: PopularList,
        },
        {
          path: "movie/now-playing",
          Component: NowPlaying,
        },
        {
          path: "movie/upcoming",
          Component: Upcoming,
        },
        {
          path: "movie/top-rated",
          Component: TopRated,
        },
        {
          path: "tv",
          Component: Popular,
        },
        {
          path: "tv/airing-today",
          Component: AiringToday,
        },
        {
          path: "tv/on-tv",
          Component: OnTv,
        },
        {
          path: "tv/top-rated",
          Component: TopRatedTv,
        },
        {
          path: `:type/:id`,
          Component: MovieDetails,
        },
        {
          path: `search`,
          Component: Search,
        },
        {
          path: "person",
          Component: PopularPeople,
        },
        {
          path: "person/:id",
          Component: PeopleDetail,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
