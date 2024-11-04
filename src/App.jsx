import { Routes, Route, Navigate } from "react-router-dom";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
