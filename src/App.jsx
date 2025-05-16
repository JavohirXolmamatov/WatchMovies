import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ErrorPages from "./components/ErrorPages";
import MovieDetails from "./features/movie/MovieDetails";
import { Dashboard } from "./features";
import PopularList from "./features/movie/PopularList";

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
          Component: PopularList,
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
