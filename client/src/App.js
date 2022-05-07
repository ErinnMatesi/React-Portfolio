import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./components/Header";
import Home from "./pages/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/ContactForm";
import Footer from "./components/Footer";
import About from "./components/About";

const App = ()=> {
  return (
    <Router>
      <div>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/portfolio"
              element={<Portfolio />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
