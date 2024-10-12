import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import * as Page from "./pages";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Page.HomePage />,
  },
  {
    path: "/",
    element: <Page.Login />,
  },
  {
    path: "/register",
    element: <Page.Register />,
  },
  {
    path: "/profile",
    element: <Page.Profile />,
  },
  {
    path: "/property",
    element: <Page.ListPage />,
  },
  {
    path: "/list",
    element: <Page.Listing />,
  },
  {
    path: "/list/:id",
    element: <Page.Detail />,
  },
  {
    path: "/shortlisted",
    element: <Page.MyShortListed />,
  },

  // Admin
  {
    path: "/admin/dashboard",
    element: <Page.AdminDashboard />,
  },
  {
    path: "/admin/add-property",
    element: <Page.AddProperty />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
