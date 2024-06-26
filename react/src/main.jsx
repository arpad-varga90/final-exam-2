import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { makeServer } from "./mirage.js";
import HomePage from "./Pages/HomePage";
import HitsPage from "./Pages/HitsPage";

import "./index.css";

// do not modify this line
makeServer();

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/albums/:albumsId/hits",
    element: <HitsPage />,
  },
]);

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  </React.StrictMode>
);
