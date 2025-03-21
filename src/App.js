import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {

  const [isFormOpen,setFormOpen] = useState(false)

  return (
    <Router>    
      <Header /> 
      <FixedForm isFormOpen={isFormOpen} setFormOpen={setFormOpen}/>
      <main>  
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutPage />} /> {/* ✅ Added About Page */}
          <Route path="/services" element={<Services />} /> {/* ✅ Added About Page */}
          <Route path="/product-list/:name" element={<ProductList setFormOpen={setFormOpen}/>} /> {/* ✅ Added About Page */}
          <Route path="/product/:product" element={<SingleProduct/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/categories" element={<Category/>} />
          <Route path="/blog" element={<BlogPage/>} />
          <Route path="/blog/:id" element={<SingleBlog/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
      </main>
      <Footer /> {/* ✅ Footer is now directly inside App.js */}
    </Router>
  );
}

export default App;
