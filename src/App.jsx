import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import SearchPage from "./Pages/SearchPage/SearchPage";
import Restaurant from "./Pages/RestaurantsPage/Restaurant";
import PopularProduct from "./Pages/ProductsPage/PopularProduct";
import CartPage from "./Pages/CartPage/CartPage";
import SettingsPage from "./Pages/SettingsPage/SettingsPage";
import AdminDashboard from "./Admin/Dashboard/AdminDashboard";
import { loadUser } from "./Redux/Authentication/Action";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
        <Route path="/popular-food/:id" element={<PopularProduct />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/restaurants" element={<AdminDashboard />} />

        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
