import React from 'react';
import './App.css'; // Asegúrate de que este archivo exista para estilos básicos

// Importa los componentes que vamos a crear
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services'; // <-- Agrega esta línea
import WhyUs from './components/WhyUs';     // <-- Agrega esta línea
import Process from './components/Process'; 
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';


import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />  {/* <-- Agrega el componente */}
      <WhyUs />     {/* <-- Agrega el componente */}
      <Process />   {/* <-- Agrega el componente */}
      <About />
      <Contact />
      <Footer />
      <ScrollToTop /> {/* ¡Agrega el componente aquí! */}
      <Analytics />
    </div>
  );
}

export default App;