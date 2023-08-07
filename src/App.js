import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import ProductsPage from "./pages/ProductsPage";
import Navbar from "./components/Navbar";
import NoMatch from "./pages/NoMatch";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductDetails />} />

        <Route path="*" element={<NoMatch />} />
        {/* <Redirect to='/' /> */}
      </Routes>
    </Router>
  );
}

export default App;
