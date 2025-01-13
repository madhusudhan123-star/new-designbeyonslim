import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import NavbarComponent from "./components/Navbar";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Cancel from "./pages/Cancel";
import Shipping from "./pages/Shipping";
import ReturnPolicy from "./pages/ReturnPolicy";
import TermsCondition from "./pages/TermsCondition";
import Privacypolicy from "./pages/Privacypolicy"; // Changed from PrivacyPolicy
import Contact from "./pages/Contact";


function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Router>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/return-policy" element={<ReturnPolicy />} />
            <Route path="/terms" element={<TermsCondition />} />
            <Route path="/privacy-policy" element={<Privacypolicy />} /> {/* Changed component name */}
          </Routes>
          <Footer />
        </Router>
      </div>
    </LanguageProvider>
  );
}

export default App;
