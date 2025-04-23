import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import HomePage from "./pages/HomePage.jsx";
import NotFound from "./pages/NotFound.jsx";
import VideoPlayer from "./pages/VideoPlayer.jsx";
import SignIn from "./components/SignIn.jsx";
import ChannelPage from "./pages/ChannelPage.jsx";
import Register from "./components/Register.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/videos/:id",
        element: <VideoPlayer />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/channel/:userId",
        element: <ChannelPage />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);