import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';
import Product from './pages/Product';
import Cancel from './pages/Cancel';
import Shipping from './pages/Shipping';
import ReturnPolicy from './pages/ReturnPolicy';
import TermsCondition from './pages/TermsCondition';
import PrivacyPolicy from './pages/Privacypolicy';

function App() {
  return (
    <LanguageProvider>
      <div className='overflow-x-hidden'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/return-policy" element={<ReturnPolicy />} />
            <Route path="/terms" element={<TermsCondition />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </LanguageProvider>
  );
}

export default App;