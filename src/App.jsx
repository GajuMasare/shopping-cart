import { Routes, Route, Navigate } from "react-router-dom";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import Navbar from "./components/layout/Navbar";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
