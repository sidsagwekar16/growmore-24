import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from "./components/templates/header/Header.tsx"; // ✅ Directly importing Header
import Footer from "./components/templates/footer/Footer.tsx"; // ✅ Directly importing Footer
import Home from "./components/templates/header/Home.tsx"; // ✅ Ensure this path is correct
import { AboutPage } from "./components/about-page/aboutPage/AboutPage.tsx";
import Services from "./components/services.tsx";
import ProductList from "./components/ProductList.tsx";
import "./App.css";
import SingleProduct from "./components/single-product/SingleProduct.tsx";
import PrivacyPolicy from "./components/privacy-policy/PrivacyPolicy.tsx";
import Category from "./components/category/Category.tsx";
import BlogPage from "./components/templates/blogs/blog/BlogPage.tsx";
import SingleBlog from "./components/templates/blogs/blog/SingleBlog.tsx";
import ContactPage from "./components/templates/contact-us/contact/ContactPage.tsx";
import FixedForm from "./components/templates/FixedForm.tsx";
import MaintenancePage  from "./components/maintainance-page/maintainance.tsx"


export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

function AppContent() {
  const location = useLocation()
  const [isFormOpen, setFormOpen] = useState(false)

  const isMaintenancePage = location.pathname === "/"

  return (
    <>
      {!isMaintenancePage && <Header />}
      {!isMaintenancePage && (
        <FixedForm isFormOpen={isFormOpen} setFormOpen={setFormOpen} />
      )}

      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MaintenancePage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/product-list/:name"
            element={<ProductList setFormOpen={setFormOpen} />}
          />
          <Route path="/product/:product" element={<SingleProduct />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {!isMaintenancePage && <Footer />}
    </>
  )
}


export default App;
