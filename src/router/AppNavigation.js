import React from "react";
import Navbar from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import BookPage from "../pages/Books/BookPage";
import OrderPage from "../pages/Orders/OrderPage";
import NewGenre from "../pages/New-Genre/NewGenre";
import DashBoard from "../pages/Dashboard/DashBoard";
import ProfilePage from "../components/ProfilePage";
import PurchasePage from "../components/PurchasePage";
import PublishPage from "../components/PublishPage";
import Orders from "../components/Orders";
import PremiumPage from "../components/PremiumPage";
import Settings from "../components/Settings";
import BookPublish from "../pages/BookPublish/BookPublish";

function AppNavigation() {
  return (
    <div>
      <Navbar />
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />
        <Route path="/Books" element={<BookPage />} />
        <Route path="/Orders" element={<OrderPage />} />
        <Route path="/NewGenres" element={<NewGenre />} />
        <Route path="/DashBoard" element={<DashBoard />}>
          <Route path="Profile" element={<ProfilePage />} />
          <Route path="Publish" element={<PublishPage />} />
          <Route path="Purchase" element={<PurchasePage />} />
          <Route path="Orders" element={<Orders />} />
          <Route path="Premium" element={<PremiumPage />}></Route>
          <Route path="Settings" element={<Settings />}></Route>
        </Route>
        <Route path="/PublishBook" element={<BookPublish />}></Route>
      </Routes>
    </div>
  );
}

export default AppNavigation;
