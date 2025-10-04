import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import NotFound from "../pages/Errors/NotFound";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        Component: Home
      }
    ]
  },
]);