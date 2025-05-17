import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ErrorPages from "./components/ErrorPages";
import MovieDetails from "./features/movie/MovieDetails";
import { Dashboard } from "./features";
import PopularList from "./features/movie/PopularList";
import NowPlaying from "./features/movie/NowPlaying";
import Upcoming from "./features/movie/Upcoming";
import TopRated from "./features/movie/TopRated";

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
          path: `movie/:id`,
          Component: MovieDetails,
        },
        {},
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
