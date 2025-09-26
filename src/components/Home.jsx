import React from 'react';
import './Home.css'; 
import backgroundImage from '../assets/background-tech.jpg'; // Importa la imagen aquí

function Home() {
  const homeStyle = {
    backgroundImage: `linear-gradient(rgba(0, 123, 255, 0.8), rgba(40, 167, 69, 0.8)), url(${backgroundImage})`,
  };

  return (
    <section id="home" className="home-section" style={homeStyle}>
      <div className="home-content">
        <h1>Transformamos tu Negocio con Software a la Medida</h1>
        <p>Somos tu socio estratégico para optimizar operaciones y alcanzar nuevas metas.</p>
        <a href="#contact" className="btn-primary">¡Hablemos de tu proyecto!</a>
      </div>
    </section>
  );
}

export default Home;