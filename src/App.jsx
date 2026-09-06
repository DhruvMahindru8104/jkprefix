import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Catalogue from "./pages/Catalogue";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Product Details Page */}
        <Route
          path="/products/:slug"
          element={<ProductDetails />}
        />
        <Route
          path="/products"
          element={<Catalogue />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;