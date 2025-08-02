import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./landing_page/Home/HomePage";
import Signup from "./landing_page/Signup/Signup";
import About from "./landing_page/About/AboutPage";
import Products from "./landing_page/products/Productpage";
import Pricing from "./landing_page/Pricing/PrincingPage";
import Support from "./landing_page/Support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
