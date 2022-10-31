import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";

import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import RoutesWithUserChat from "./components/RoutesWithUserChat";
import ProtectedRoutes from "./components/ProtectedRoutes";

import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import UserProfilePage from "../src/pages/user/UserProfilePage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminChatPage from "./pages/admin/AdminChatPage";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <ScrollToTop />

      <Routes>
        <Route element={<RoutesWithUserChat />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          {/* <Route path="/" element={<ProductSingleDetailsPage />} /> */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="user">
              <Route index element={<UserProfilePage />} />
              <Route path="my-orders" element={<UserOrdersPage />} />
              <Route path="cart-details" element={<UserCartDetailsPage />} />
              <Route path="order-details" element={<UserOrderDetailsPage />} />
            </Route>
          </Route>
        </Route>

        <Route element={<ProtectedRoutes admin />}>
          <Route path="admin">
            <Route index element={<AdminUsersPage />} />
            <Route path="users" element={<AdminUsersPage />} />
            <Route path="edit-user" element={<AdminEditUserPage />} />
            <Route path="products" element={<AdminProductsPage />} />
            <Route path="edit-product" element={<AdminEditProductPage />} />
            <Route
              path="create-new-product"
              element={<AdminCreateProductPage />}
            />
            <Route path="orders" element={<AdminOrdersPage />} />
            <Route path="order-details" element={<AdminOrderDetailsPage />} />
            <Route path="analytics" element={<AdminAnalyticsPage />} />
            <Route path="chats" element={<AdminChatPage />} />
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
};

export default App;
