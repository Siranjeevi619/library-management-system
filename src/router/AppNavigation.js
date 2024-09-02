import React from "react";
import Navbar from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import BookPage from "../pages/Books/BookPage";
import OrderPage from "../pages/Orders/OrderPage";
import NewGenre from "../pages/New-Genre/NewGenre";

function AppNavigation() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/Books" element={<BookPage />}>
          Book
        </Route>
        <Route path="/Orders" element={<OrderPage />}>
          Orders
        </Route>
        <Route path="/NewGenres" element={<NewGenre />}>
          New Genre
        </Route>
      </Routes>
    </div>
  );
}

export default AppNavigation;
