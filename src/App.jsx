 import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BooksSlider from "./components/books/books"
import NotesSlider from "./components/Notes/notes"
import ReviewsSlider from "./components/Reviews/reviews"
import NewProductsSlider from "./components/newProducts/newProducts"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <div>Cart Page</div> },
      { path: "wishlist", element: <div>Wishlist</div> },
         { path: "books", element: <BooksSlider /> },
         { path: "notes", element: <NotesSlider /> },
         { path: "reviews", element: <ReviewsSlider /> },
         { path: "newProducts", element: <NewProductsSlider /> },
      { path: "*", element: <NotFound /> },
   
     
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
