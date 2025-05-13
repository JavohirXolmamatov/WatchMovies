import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ErrorPages from "./components/ErrorPages";
import MovieList from "./features/movie/MovieList";
import MovieDetails from "./features/movie/MovieDetails";
import { Dashboard } from "./features";

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
          path: "movies",
          Component: MovieList,
        },
        {
          path: `movies/:id`,
          Component: MovieDetails,
        },
        {},
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
