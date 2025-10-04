import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./App.css";
import LoginForm from "./Auth/LoginForm";
import RegisterForm from "./Auth/RegisterForm";
import Wishlist from "./pages/Wishlist";
import ForgotPassword from "./Auth/ForgetPassword";
import ProductDetail from "./pages/ProductDetail";
import { products } from "./utlis/data";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route
          path="/product/:id"
          element={<ProductDetail products={products} />}
        />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={<h1 className="text-center my-5">404 Not Found</h1>}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
