import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import AboutTeam from "./components/AboutTeam";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}


export default App;
