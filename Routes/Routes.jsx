import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import NotFound from "../pages/Errors/NotFound";
import Home from "../pages/Home/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from './../pages/PagesToRead';
import BookDetail from "../pages/BookDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <NotFound />,
    hydrateFallbackElement: <div>Loading...</div>,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "book-detail/:id",
        loader: () => fetch("/booksData.json"),
        Component: BookDetail
      },
      {
        path: "listed-books",
        Component: ListedBooks
      },
      {
        path: "pages-to-read",
        Component: PagesToRead
      }
    ]
  },
]);