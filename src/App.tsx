import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import BlogPage from './pages/BlogPage';
import ProductPage from './pages/ProductPage';
import ResourcesPage from './pages/ResourcesPage';
import TutorialsPage from './pages/TutorialsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-navy-900 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/products/:productId" element={<ProductPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/tutorials" element={<TutorialsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;