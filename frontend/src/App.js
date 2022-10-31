import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserProfilePage from "../src/pages/user/UserProfilePage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import ProtectedRoutes from "./components/ProtectedRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/" element={<ProductDetailsPage />} />
        <Route path="/" element={<ProductSingleDetailsPage />} />
        <Route path="/" element={<CartPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/" element={<RegisterPage />} /> */}

        <Route element={<ProtectedRoutes />}>
          <Route path="user">
            <Route index element={<UserProfilePage />} />
            <Route path="my-orders" element={<UserOrdersPage />} />
            <Route path="cart-details" element={<UserCartDetailsPage />} />
            <Route path="order-details" element={<UserOrderDetailsPage />} />
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
