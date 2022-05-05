// import logo from './logo.svg';
import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = ()=> {
  return (
    <div>
      <Header />
      <Navbar />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
