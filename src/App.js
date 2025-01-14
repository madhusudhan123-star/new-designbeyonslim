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
import About from "./pages/About"; // Make sure this import is correct
import FAQ from "./pages/FAQ";
import { FaPhoneAlt } from 'react-icons/fa';

function App() {
  const handleCall = () => {
    window.location.href = 'tel:+919908526444';
  };

  return (
    <LanguageProvider>
      <div className="App min-h-screen"> {/* Add min-h-screen */}
        <Router>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> {/* Add this line */}
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/return-policy" element={<ReturnPolicy />} />
            <Route path="/terms" element={<TermsCondition />} />
            <Route path="/privacy-policy" element={<Privacypolicy />} /> {/* Changed component name */}
            <Route path="/faq" element={<FAQ />} />
          </Routes>
          <Footer />

          {/* Floating Call Button */}
          <button
            onClick={handleCall}
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 
                     text-white rounded-full p-4 shadow-lg transform hover:scale-110 
                     transition-all duration-300 flex items-center justify-center
                     animate-bounce hover:animate-none"
            aria-label="Call us"
          >
            <FaPhoneAlt className="text-2xl" />
            <span className="ml-2 hidden md:inline">Call Now</span>
          </button>
        </Router>
      </div>
    </LanguageProvider>
  );
}

export default App;
