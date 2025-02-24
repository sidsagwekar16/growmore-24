import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/templates/header/Header.tsx"; // ✅ Directly importing Header
import Footer from "./components/templates/footer/Footer.tsx"; // ✅ Directly importing Footer
import Home from "./components/templates/header/Home.tsx"; // ✅ Ensure this path is correct
import { AboutPage } from "./components/about-page/aboutPage/AboutPage.tsx";
import Services from "./components/services.tsx";
import ProductList from "./components/ProductList.tsx";
import "./App.css";
import SingleProduct from "./components/single-product/SingleProduct.tsx";

function App() {
  return (
    <Router>    
      <Header /> {/* ✅ Header is now directly inside App.js */}
      <main>  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} /> {/* ✅ Added About Page */}
          <Route path="/services" element={<Services />} /> {/* ✅ Added About Page */}
          <Route path="/product-list" element={<ProductList />} /> {/* ✅ Added About Page */}
          <Route path="/product/:category" element={<SingleProduct/>} />
        </Routes>
      </main>
      <Footer /> {/* ✅ Footer is now directly inside App.js */}
    </Router>
  );
}

export default App;
